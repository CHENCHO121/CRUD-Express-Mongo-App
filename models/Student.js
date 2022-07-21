import mongoose from "mongoose";

//defining schema

const studentSchema = new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    age:{type:Number, required:true , min:5, max:40},
    fees:{type:mongoose.Decimal128, required:true, validate:(value)=>value>=5000.50}
});

//create model

const StudentModel = mongoose.model("student",studentSchema)


export default StudentModel;