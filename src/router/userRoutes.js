import express from "express";
import userSingupModel from "../model/user.model.singup.js"; // Adjust the path if necessary

const router = express.Router();

// Define user-related routes

// Signup route
router.post("/signup", async (req, res) => {
  const data = req.body;
  try {
    // Check if user already exists
    let existingUser = await userSingupModel.findOne({ number: data.number });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    // Create a new user
    const newUser = new userSingupModel(data);
    await newUser.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).send("Server error");
  }
});

// Login route
router.post("/login", async(req, res) => {
  // Placeholder for login logic
  let data=req.body
  try {
    let existingUser = await userSingupModel.findOne({ number: data.number ,password: data.password});
    if(existingUser){
        res.send("User login secusfull")
    }else{
        res.send("User Number and password wring");
    }
    
  } catch (error) {
    
  }
  
});




export default router;
