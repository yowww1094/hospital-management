import mongoose, { Schema } from "mongoose";

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    idCard: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    email: {
        type: String,
    },
    appointements: [{
        ype: Schema.Types.ObjectId,
        ref: 'Appointement'
    }],
    invoices: [{
        type: Schema.Types.ObjectId,
        ref: 'Invoice'
    }],
    payements: [{
        type: Schema.Types.ObjectId,
        ref: 'Payement'
    }]
},
{
    timestamps: true
});

const Patient = mongoose.model('Patient', patientSchema);
export default Patient;