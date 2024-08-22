import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URL = process.env.URL

const connection=mongoose.connect(`${URL}`)

export default connection