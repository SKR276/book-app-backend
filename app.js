const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const bookRoute=require("./controllers/bookRouter")

const app=express()

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sreelakshmi:Skr1234@cluster0.p9kjpl1.mongodb.net/bookDb?retryWrites=true&w=majority",
{useNewUrlParser:true}
)

app.use("/api/books",bookRoute)

app.listen(3001,()=>{
    console.log("server running")
})