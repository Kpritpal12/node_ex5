const express=require("express");
const cors=require("cors");
const mainRouter=require("./routes")

const app=express();
app.use(cors());

//   app.get("/user")
//   app.get("/emplyee")

app.use("/api/v1", mainRouter ) //child routes

app.listen(process.env.PORT || 5000,()=>{
    console.log("started");
})
