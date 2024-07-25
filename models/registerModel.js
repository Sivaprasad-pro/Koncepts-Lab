import { Schema, models, model } from "mongoose";

const registerSchema = new Schema({
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
    budget: {
        type: String,
        required: true
    },
    servicetype: {
        type: String,
        required: true
    },
    timeline: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
});

const RegisterModel = models.Joinus ||  model('Registration', registerSchema);

export default RegisterModel;