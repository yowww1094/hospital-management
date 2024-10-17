import mongoose, { mongo } from "mongoose";

const payementSchema = mongoose.Schema({

});

const Payement = mongoose.model('Payement', payementSchema);
export default Payement;