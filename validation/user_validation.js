const joi=require("joi");


const userSchema=joi.object({
    full_name:joi.string().required(),
    email:joi.string().required().email(),
    contact_no:joi.string().required()
})


function UserValidation(req,res,next){
    const {full_name,email,contact_no}=req.body;
    const {error}=userSchema.validate({full_name,email,contact_no})
    if(error){
     return res.json(error)
    }
    next()
}


module.exports=UserValidation;