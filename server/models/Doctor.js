import mongoose from "mongoose";

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
    appointements: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointement'
    }]
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;