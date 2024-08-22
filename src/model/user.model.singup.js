import mongoose from "mongoose";


const userSingupSchema=new mongoose.Schema({
    name:{type:String,require:true},
    number:{type:Number,require:true},
    password:{type:String,require:true},
    value: {
        recharge: [Number],
        wallet: [Number],
        withdrawal: [Number],
        product: String
    }
})

const userSingupModel=mongoose.model('user',userSingupSchema)
export default userSingupModel