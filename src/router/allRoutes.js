import express from "express";
import productModel from "../model/product.model.js";

const allRouter = express.Router();

allRouter.post('/productCreate',async(req,res)=>{
        let data=req.body
        try {
            let newProduct=await productModel.insertMany(data)
            res.send(`Product create successfully:, ${newProduct}`);

        } catch (error) {
            res.send(`Error creating product:, ${error.message}`);
        }
        
})
allRouter.get('/product',async(req,res)=>{

        try {
            let newProduct=await productModel.find()
            res.send(`Product Get successfully:, ${newProduct}`);

        } catch (error) {
            res.send(`Product not Get:, ${error.message}`);
        }
        
})




export default allRouter;
