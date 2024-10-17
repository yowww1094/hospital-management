import mongoose, { Schema } from "mongoose";
import Hospital from "./Hospital";

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital'
    },
    appointements: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointement'
    }]
},
{
    timestamps: true
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;