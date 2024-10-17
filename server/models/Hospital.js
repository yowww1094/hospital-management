import mongoose from "mongoose";

const hospitalSchema = mongoose.Schema({
    name: {
        type:String,
        trim:true, 
        required:true,
    },
    address: {
        type:String,
        trim:true, 
        required:true,
    },
    phone1: {
        type:String,
        trim:true, 
        required:true,
    },
    phone2: {
        type:String,
        trim:true, 
    },
    email: {
        type:String,
        trim:true,
    },
    rc: {
        type:String,
        trim:true, 
        required:true,
    },
    ice: {
        type:String,
        trim:true, 
        required:true,
    }
},
{
    timestamps: true
})

const Hospital = mongoose.model('Hospital', hospitalSchema);
export default Hospital;