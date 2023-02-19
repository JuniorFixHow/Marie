import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    stId:{
        type:Number
    },
    prog:{
        type:String,
    }
}, {timestamps:true});

const Students = mongoose.model('Student', studentSchema);

export default Students;