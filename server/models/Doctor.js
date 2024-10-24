import mongoose, { Schema } from "mongoose";

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
        ref: 'Hospital',
        required: true
    },
    appointements: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointement'
    }],
    isActive: {
        type: Number,
        default: 1
    }
},
{
    timestamps: true
});

const Doctor = mongoose.model("Doctor", doctorSchema);
export default Doctor;