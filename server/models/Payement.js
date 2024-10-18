import mongoose, { mongo, Schema } from "mongoose";

const payementSchema = mongoose.Schema({
    bill: {
        type: Schema.Types.ObjectId,
        ref: 'Invoice'
    },
    paidAmt: {
        type: String,
        required: true
    },
    discount: {
        type: String,
    },
    payType: {
        type: String,
        required: true
    }
});

const Payement = mongoose.model('Payement', payementSchema);
export default Payement;