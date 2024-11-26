const mongoose=require("mongoose");

const connectDB=async ()=>{

    try{
        await mongoose.connect("mongodb://localhost:27017/db_demo_web")
        console.log("Mongodb connected succesfully")

    }catch(e){
        console.log("Mangodb not connected")
    }

}


module.exports=connectDB;