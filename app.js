const express = require ("express")
const connectDb = require("./config/db");
const user_route=require("./routes/user_route")
const car_route=require("./routes/car_route")
const rental_route=require("./routes/rental_route")
const cred_route=require("./routes/cred_route")

const app=express();

connectDb();


app.use(express.json());

app.use("/api/user", user_route);
app.use("/api/car",car_route);
app.use("/api/rental",rental_route);
app.use("/api/cred",cred_route);

const port=3000;
app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})