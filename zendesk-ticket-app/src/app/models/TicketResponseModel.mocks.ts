import { TicketResponseModel } from "./TicketResponseModel";

export const mockTicketModel1: TicketResponseModel = {
    allow_attachments: false,
    allow_channelback: false,
    assignee_id: 0,
    brand_id: 0,
    collaborator_ids: [],
    collaborators: [],
    created_at: "",
    custom_fields: [],
    description: "",
    due_at: "",
    email_cc_ids: [],
    external_id: "",
    follwer_ids: [],
    followup_ids: [],
    forum_topic_id: 0,
    group_id: 0,
    has_incidents: false,
    id: 1,
    is_public: false,
    macro_ids: [],
    organization_id: 0,
    priority: "",
    problem_id: 0,
    raw_subject: "",
    recipient: "",
    requester_id: 0,
    satisfaction_rating: "",
    sharing_agreement_ids: [],
    status: "",
    subject: "",
    submitter_id: 0,
    tags: [],
    ticket_form_id: 0,
    type: "",
    updated_at: "",
    url: "",
    via: "",
    via_followup_source_id: 0
}

export const mockErrorModel1: any = {
    error: "APIConnectionError",
    status: 1
}

export const mockErrorModel2: any = {
    error: "Couldn't authenticate you",
    status: 2
}

export const mockErrorModel3: any = {
    error: "RecordNotFound",
    status: 3
}

export const mockErrorModel4: any = {
    error: "InvalidEndpoint",
    status: 4
}