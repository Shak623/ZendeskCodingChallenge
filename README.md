# ZendeskTicketApp
This project is for the zendesk coding challenge to view all the tickets
in my account. This project uses both node.js, to connect to the Zendesk API,
and Angular to display the data from the API.

# Prerequisites
To run this program make sure you have the latest versions of the following software installed.

- [Node.js](https://nodejs.org/en/download/)

Also, in order to connect to the Zendesk API you will need a `.env` file. I should have provided you with this file when submitted, but if you do not have one, please let me know and I can provide it to you. This file should belong in the root folder of the repository.

Once you have these prerequisites, you can fork or clone this repo and start running the app.

# Running the App

## Running the Node Server
Open the command terminal and go to the root directory of the repository and install necessary dependencies.  
Run `npm install` to install the dependencies for the node server.

### Development server
Run `npm run dev` for a dev server of the node server. Navigate to `http://localhost:3080/` to see the server running.

### Production server

I have not set up a production server for this project

### Issues
If you experience any issues, check the [potential issues](#potential-issues) section to hopefully help you solve any issues you are experiencing

## Running the Angular Server
Open the command terminal and move into the zendesk-ticket-app directory to run the app by using the following command:
>`cd zendesk-ticket-app`
### Install dependencies
Run `npm install` to install all the necessary dependencies for the angular server.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. 

### Production server

I have not set up a production server for this project.

### Issues
If you experience any issues, check the [potential issues](#potential-issues) section to hopefully help you solve any issues you are experiencing

# Build & Testing
## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

### Angular Server

To run tests on the angular server make sure you are in the zendesk-ticket-app directory. Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

To see the code coverage of the angular server, run `ng test --no-watch --code-coverage`. This will create a coverage directory in the zendesk-ticket-app, and in this dirctory is an index.html file that you can open with a live server.

### Node Server

I have not set up unit tests for the node server at this time.

# Potential Issues
If you experience an authentication error, make sure you have the `.env` file as I have mentioned before. If you do not have one, be sure to contact me and I will provide you with the `.env` file.

If you experience an http error response (status 0), then make sure you have the node server running. See [Running the Node Server](#running-the-node-server)
