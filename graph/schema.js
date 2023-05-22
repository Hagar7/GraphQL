import { GraphQLObjectType, GraphQLSchema, GraphQLString } from "graphql";
import * as productFields from "./product/fields.js";
import * as categoryFields from './category/fields.js'

const QueryRoot = new GraphQLObjectType({
  name: "QueryRoot",
  fields: {
    getAllProducts:productFields.getAllProducts,
    getproduct:productFields.getproduct,
    getAllCategory:categoryFields.getAllCategory
  },
});

const mutationRoot = new GraphQLObjectType({
  name: "MutationRoot",
  fields: {
    addproduct: productFields.addproduct,
    addcategory:categoryFields.addcategory,
    deleteProduct:productFields.deleteProduct,
    updateProduct:productFields.updateProduct
  },
});

export const schema = new GraphQLSchema({
  query: QueryRoot,
  mutation: mutationRoot,
});
