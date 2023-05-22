import { GraphQLFloat, GraphQLID, GraphQLList, GraphQLString } from "graphql"
import { categoryType } from "./type.js"
import categoryModel from "../../DB/model/category.model.js"


export const addcategory = {
    type:categoryType,
    args:{
        _id:{type:GraphQLID},
        name:{type:GraphQLString},
    },
    resolve:async(parent,args)=>{
        const {name} = args
        const category = new categoryModel({name})
        await category.save()
        return category
    }
}


export const getAllCategory ={
    type: new GraphQLList(categoryType),
  resolve: async (parent, args) => {
    const categories = await categoryModel.find({})
    return categories;
  },
}