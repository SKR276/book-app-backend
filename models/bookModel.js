const mongoose=require("mongoose")
const bookSchema=new mongoose.Schema(
    {
        bookName:String,
        bookAuthor:String,
        bookPublisher:String,
        bookPrice:String,
        bookDistributer:String
    }
)

module.exports=mongoose.model("books",bookSchema)