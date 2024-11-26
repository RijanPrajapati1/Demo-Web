
const customer = require("../model/customer")


const findAll = async (req, res) => {
    try {
        const customers = await customer.find();
        res.status(200).json(customers);
    } catch (e) {
        res.status(500).json(e)
    }
}


const save = async (req, res) => {
    try {
        const{body}=req
        const customers = new customer(body);
        await customers.save()
        res.status(201).json(customers)   
    } catch (e) {
        res.status(500).json(e)
    }
}

const findById=async(req,res) => {
    try{
        const customers=await customer.findById(req.params.id);
        res.status(200).json(customers)
    }catch(e){
        res.status(500).json(e)
    }
}


const deleteById=async(req,res) => {
    try{
        const customers=await customer.findByIdAndDelete(req.params.id);
        res.status(200).json("Data Deleted")
    }catch(e){
        res.status(500).json(e)
    }
}

const update=async(req,res) => {
    try{
        const customers=await customer.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(202).json(customers)
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