const express=require("express");
const router=express.Router(); //allow to create child route oe end points for api
const productRouter=require("./products")

router.use("/products", productRouter ) //use to append the child routes

module.exports=router;