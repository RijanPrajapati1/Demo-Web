const express=require("express")
const router=express.Router()

const{login, register}=require("../controller/cred_controller")
const { authenticateToken } = require("../security/auth")



router.post("/login",login)
router.post("/register",authenticateToken, register)

module.exports=router;