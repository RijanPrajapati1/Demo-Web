
const rental = require("../model/rental")


const findAll = async (req, res) => {
    try {
        const rentals = await rental.find()
        .populate('userId')
        .populate('carId');
        res.status(200).json(rentals);
    } catch (e) {
        res.status(500).json(e)
    }
}


const save = async (req, res) => {
    try {
        const{body}=req
        console.log("Request Body: ", body);
        const rentals = new rental(body);
        await rentals.save()
        res.status(201).json(rentals)   
    } catch (e) {
        console.error("Error: ", e);
        res.status(500).json(e)
    }
}

const findById=async(req,res) => {
    try{
        const rentals=await rental.findById(req.params.id);
        res.status(200).json(rentals)
    }catch(e){
        res.status(500).json(e)
    }
}


const deleteById=async(req,res) => {
    try{
        const rentals=await rental.findByIdAndDelete(req.params.id);
        res.status(200).json("Data Deleted")
    }catch(e){
        res.status(500).json(e)
    }
}

const update=async(req,res) => {
    try{
        const rentals=await rental.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(202).json(rentals)
    }catch(e){
        res.status(500).json(e)
    }
}


module.exports = {
    findAll,
    save,
    findById,
    deleteById,
    update
}