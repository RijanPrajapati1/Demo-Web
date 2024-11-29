const express = require ("express")
const connectDb = require("./config/db");
const user_route=require("./routes/user_route")

const app=express();

connectDb();


app.use(express.json());

app.use("/api/user", user_route);


const port=3000;
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})