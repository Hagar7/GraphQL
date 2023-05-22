import mongoose from "mongoose";
import { Schema, model } from "mongoose";




const productSchema = new Schema({
    title:{
        type:String,
        required:[true,'product title is required'],
        trim:true,
        minLength:[2,'too short product name']
    },
    price:{
        type:Number,
        required:[true,'product price is required'],
        min:0
    },
    description:{
        type:String,
        minLength:[5,'too short product description'],
        maxLength:[300,'too long product description'],
        trim:true,
        required:[true,'product description is required'],
    },
    quantity:{
        type:Number,
        min:0,
        default:0,
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        ref:'Category',
        required:[true,'product category is required'],
    },

},{
  timestamps:true
})



const productModel = model.Product || model('Product',productSchema)


export default productModel;