

const express=require("express")

const userValidation=joi.object({
    name:joi.string().required(),
    age:joi.number().required()
});


