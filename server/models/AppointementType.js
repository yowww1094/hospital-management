import mongoose from "mongoose";

const appointementTypesSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String
    }
},
{
    timestamps: true
});

const AppointementType = mongoose.model('AppiontementTypes', appointementTypesSchema);
export default AppointementType;