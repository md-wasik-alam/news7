const { default: mongoose } = require("mongoose");

const PostSchema = new mongoose.Schema({
    title:{type:String},
    reporter:{type:String},
    category:{type:String},
    content:{type:String},
    date:{type:String}
})

module.exports = mongoose.models.Post || mongoose.model("Post",PostSchema)