const express = require ("express")
const connectDb = require("./config/db");
const customer_route=require("./routes/customer_route")

const app=express();

connectDb();


app.use(express.json());

app.use("/api/customer", customer_route);


const port=3000;
app.listen(port,()=>{
    console.log(`server running at http://localhost:${port}`)
})