const mongoose=require("mongoose")

const groundSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

const Cars=mongoose.model("cars",groundSchema)

module.exports=Customer;