const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

app.use(cors())             // Enables CORS for all (*)


let tickets = [];


// Authentication
const username = process.env.USER;
const password = process.env.PASSWORD;
const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64');

// url
const apiUrl = 'https://zccsfarooq.zendesk.com/api/v2'

app.use(express.json());        // Used to parse JSON bodies

//GET /tickets
app.get('/api/tickets', async (req, res) => {

    tickets = await getTickets()

    res.json(tickets);
});

// GET /ticket/:id
app.get('/api/ticket/:id', async (req, res) => {
    let id = req.params.id;

    const ticketResponse = await fetch(`${apiUrl}/tickets/${id}.json`, {
        headers: {
            'Authorization': `Basic ${token}`
        }
    });
    let data = await ticketResponse.json().catch((err) => {                             // Get ticket data
        console.error(`${ticketResponse.status}: API connection error while getting ticket ${id}\n${err.message}`);
        res.json({"error": "APIConnectionError", "status": ticketResponse.status});     // Check for connection error
    });
    // Check for errors while getting ticket :id
    if(!ticketResponse.ok) {
        console.error(`An error has occured while getting ticket ${id}: ${ticketResponse.status}`);
        data["status"] = ticketResponse.status;
    }
    else {
        data = data.ticket;
        console.log(`Received ticket with id: ${id}`);
    }
    res.json(data);
})

//GET /tickets/count
app.get('/api/tickets/count', async (req, res) => {
    let countResponse = await getCount();

    let data = await countResponse.json().catch((err) => {                              // Get count data
        console.error(`${countResponse.status}: API connection error while getting count\n${err.message}`);
        res.json({"error": "APIConnectionError", "status": countResponse.status});      // Check conneciton error
    });
    // Check for errors while getting count
    if(!countResponse.ok) {
        console.error(`An error has occured while getting count: ${countResponse.status}`);
        data["status"] = countResponse.status;
    }
    else {
        data = data.count;
    }
    res.json(data);
})

//GET home
app.get('/', (req,res) => {
    res.send('App Works !!!!!!!!');
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});



/*
    Get all the tickets from the Zendesk API
*/
async function getTickets() {
    let tickets = []
    let morePagesAvailable = true;
    let currentPage = 1;

    let countResponse = await getCount();
    let countData = await countResponse.json().catch((err) => {                             // Get count data
        console.error(`${countResponse.status}: API connection error while getting count\n${err.message}`);
        return {"error": "APIConnectionError", "status": countResponse.status};             // Catch connection error
    });
    // Check for errors while getting count
    if (!countResponse.ok) {
        console.error(`An error has occured while getting count: ${countResponse.status}`);
        countData["status"] = countResponse.status;
        return countData;
    }
    let totalPages = Math.ceil(countData.count.value/100)               // Get the total number of pages

    // As long as there are more pages, grab tickets and add to the tickets array
    while(morePagesAvailable){
        const pageResponse = await fetch(`${apiUrl}/tickets.json?page=${currentPage}`, {
            headers: {
                'Authorization': `Basic ${token}`
            }
        });

        let data = await pageResponse.json().catch((err) => {
            console.error(`${pageResponse.status}: API connection error while getting tickets\n${err.message}`);
            return {"error": "APIConnectionError", "status": pageResponse.status}
        });
        // Check for errors while getting tickets 
        if (!pageResponse.ok) {
            console.error(`An error has occured while getting tickets: ${pageResponse.status}`);
            data["status"] = pageResponse.status;
            return data;
        }
        tickets = tickets.concat(data.tickets);
        currentPage++;
        morePagesAvailable = currentPage <= totalPages;
    }
    console.log("Received all of the tickets");
    return tickets;
}

/*
Get count of tickets from Zendesk API
*/
async function getCount() {
    // Get total count of tickets
    const countResponse = await fetch(`${apiUrl}/tickets/count`, {
        headers: {
            'Authorization': `Basic ${token}`
        }
    });
    return countResponse;
}