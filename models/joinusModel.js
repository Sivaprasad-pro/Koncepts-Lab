import { Schema, models, model } from "mongoose";

const joinusSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
});

const JoinusModel = models.Joinus ||  model('Joinus', joinusSchema);

export default JoinusModel;
