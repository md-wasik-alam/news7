import mongoose from "mongoose";

let CategorySchema = new mongoose.Schema({
    title:{type:String},
    description:{type:String}
},{timestamps:true})


module.exports = mongoose.models.Category || mongoose.model("Category",CategorySchema)
