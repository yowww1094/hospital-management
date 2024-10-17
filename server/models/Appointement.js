import mongoose, { Schema, SchemaType } from "mongoose";

const appointementSchema = mongoose.Schema({
    patient: {
        type: Schema.Types.ObjectId,
        ref: 'Patient'
    },
    doctor: {
        type: Schema.Types.ObjectId,
        ref: 'Doctor'
    },
    date: {
        type: Date,
        required: true
    },
    description: {
        type: String
    },
    apointementType: {
        type: Schema.Types.ObjectId,
        ref: 'AppointementType'
    }
}, 
{
    timestamps: true
});

const Appointement = mongoose.model('Appointement', appointementSchema);
export default Appointement;