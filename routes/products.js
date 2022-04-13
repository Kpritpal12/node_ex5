const express=require("express");
const productRouter=express.Router();//to make child route
const productController=require("../controllers/product")
productRouter.route("/")
   .get(productController.getData)



module.exports=productRouter;