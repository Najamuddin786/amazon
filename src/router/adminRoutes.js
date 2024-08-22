import express from "express";
import userSingupModel from "../model/admin.model.singup.js"; // Adjust the path if necessary
import adminSingupModel from "../model/admin.model.singup.js";

const adminRouter = express.Router();

// Define user-related routes

// Signup route
adminRouter.post("/signup", async (req, res) => {
        res.send("Admin Singup not all by devloper")
});

// Login route
adminRouter.post("/login", async(req, res) => {
  // Placeholder for login logic
  let data=req.body
  try {
    let existingUser = await adminSingupModel.findOne({ number: data.number ,password: data.password});
    if(existingUser){
        res.send("User login secusfull")
    }else{
        res.send("User Number and password wring");
    }
    
  } catch (error) {
    console.log("Errrrrrrrrrrrrrrrrrrr")
  }
  
});

export default adminRouter;
