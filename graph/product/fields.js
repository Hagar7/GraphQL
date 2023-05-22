import {
  GraphQLFloat,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLString,
} from "graphql";
import { productType } from "./type.js";
import productModel from "../../DB/model/product.model.js";
import { graphValidation } from "../../middleware/validation.js";
import { addValidation, updateValidation } from "./productValidation.js";

export const addproduct = {
  type: productType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    categoryId: { type: GraphQLID },
  },
  resolve: async (parent, args) => {
    await graphValidation(addValidation,args)
    const { title, price, description, quantity, categoryId } = args;
    const product = new productModel({
      title,
      price,
      description,
      quantity,
      categoryId,
    });
    await product.save();
    return product;
  },
};

export const getAllProducts = {
  type: new GraphQLList(productType),
  resolve: async (parent, args) => {
    const products = await productModel.find({}).populate([
      {
        path: "categoryId",
        select: ["name"],
      },
    ]);
    return products;
  },
};

export const getproduct = {
  type: productType,
  args: { _id: { type: GraphQLID } },
  resolve: async (parent, args) => {
    const { _id } = args;
    const product = await productModel.findById({ _id }).populate([
      {
        path: "categoryId",
        select: ["name"],
      },
    ]);
    return product;
  },
};

export const deleteProduct = {
  type: productType,
  args: { _id: { type: GraphQLID }, message: { type: GraphQLString } },
  resolve: async (parent, args) => {
    const { _id } = args;
    const product = await productModel.findOneAndDelete({ _id });
    return {
      message: "success delete product",
    };
  },
};

export const updateProduct = {
  type: productType,
  args: {
    _id: { type: GraphQLID },
    title: { type: GraphQLString },
    price: { type: GraphQLFloat },
    description: { type: GraphQLString },
    quantity: { type: GraphQLInt },
    categoryId: { type: GraphQLID },
  },
  resolve: async (parent, args) => {
    await graphValidation(updateValidation,args)
    const { title, price, description, quantity, categoryId, _id } = args;
    const product = productModel.findOneAndUpdate(
      { _id },
      { title, price, description, quantity, categoryId },{new:true}
    );
    return product;
  },
};
