const { response } = require("express");
const jwt = require("jsonwebtoken")

function authorization(req, res, next) {

    try {
        const token = req?.header('Authorization')?.split(" ")[1]

        if (!token) {
            res.status(401).json({
                mesage: "UnAuthorized"
            });
        } else {
            try{
                const verified = jwt.verify(token, "3b833911d85b476e758fdd1156c567deb4dffc7445374849c5827d9f7799161c");
                req.user = verified;
                next();
            }catch(e){
                response.status(401).json({
                    message: "Invalid Token"
                })
                
            }
           
        }

    } catch (e) {
        res.status(401).json({
            mesage: "UnAuthorized"
        })
    }

}


module.exports = {
    authorization
}