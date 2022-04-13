const express=require("express");
const cors=require("cors");
const mainRouter=require("./routes")

const app=express();
app.use(cors());

//   app.get("/user")
//   app.get("/emplyee")

app.use("/api/v1", mainRouter ) //child routes

app.listen(5000,()=>{
    console.log("started");
})