import mongoose, { mongo, Schema } from "mongoose";

const invoiceSchema = mongoose.Schema({
    patient: { 
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    appointement: {
        type: Schema.Types.ObjectId,
        ref: 'Appointement'
    },
    bill_date: {
        type: String,
        required: true
    },
    bill_amt: {
        type: String,
        required: true
    },
});

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;