const express=require("express")
const bookModel=require("../models/bookModel")

const router=express.Router()

router.post("/book_entry",async(req,res)=>{
    let data=req.body
    let bookObj=new bookModel(data)
    let result=await bookObj.save()
    res.json({
        status:"success"
    })
})

router.get("/book_view",async(req,res)=>{
    let data=await bookModel.find()
    res.json(data)
})

router.post("/book_search",async(req,res)=>{
    let input=req.body
    let data=await bookModel.find(input)
    res.json(data)
})

module.exports=router