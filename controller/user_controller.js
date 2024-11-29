
const user = require("../model/user")


const findAll = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (e) {
        res.status(500).json(e)
    }
}


const save = async (req, res) => {
    try {
        const{body}=req
        const users = new user(body);
        await users.save()
        res.status(201).json(users)   
    } catch (e) {
        res.status(500).json(e)
    }
}

const findById=async(req,res) => {
    try{
        const users=await user.findById(req.params.id);
        res.status(200).json(users)
    }catch(e){
        res.status(500).json(e)
    }
}


const deleteById=async(req,res) => {
    try{
        const users=await user.findByIdAndDelete(req.params.id);
        res.status(200).json("Data Deleted")
    }catch(e){
        res.status(500).json(e)
    }
}

const update=async(req,res) => {
    try{
        const users=await user.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(202).json(users)
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