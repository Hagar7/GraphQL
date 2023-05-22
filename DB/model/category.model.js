import { Schema, model } from "mongoose";




const categorySchema = new Schema({
name:{
    type:String,
    unique:[true,'name is required'],
    required:true,
    trim:true,
    minLength:[2,'too short category name']
},
},{

    timestamps:true
})

    

const categoryModel = model.Category || model('Category',categorySchema)


export default categoryModel;