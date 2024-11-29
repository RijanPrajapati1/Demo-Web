

const express=require("express")

const customerValidation=joi.object({
    name:joi.string().required(),
    age:joi.number().required()
});


