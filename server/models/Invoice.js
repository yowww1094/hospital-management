import mongoose, { mongo } from "mongoose";

const invoiceSchema = mongoose.Schema({

});

const Invoice = mongoose.model('Invoice', invoiceSchema);
export default Invoice;