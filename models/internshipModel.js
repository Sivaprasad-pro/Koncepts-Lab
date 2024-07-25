
import { Schema, models, model } from "mongoose";

const internshipSchema = new Schema({
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
    qualification: {
        type: String,
        required: true
    },
    message:{
        type: String,
        required: true
    },
});

const InternshipModel = models.Internship ||  model(' Internship',  internshipSchema);

export default InternshipModel;