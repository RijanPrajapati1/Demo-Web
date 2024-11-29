const express=require("express");
const { findAll, save, findById, deleteById, update } = require("../controller/user_controller");
const { authorization } = require("../security/auth");

const router=express.Router();


router.get("/", findAll)
router.post("/", authorization, save)
router.get("/:id",findById)
router.delete("/:id",deleteById)
router.put("/:id",update)


module.exports=router;