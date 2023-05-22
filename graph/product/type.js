import { GraphQLFloat, GraphQLID, GraphQLInputObjectType, GraphQLInt, GraphQLObjectType, GraphQLString } from "graphql";



export const productType = new GraphQLObjectType({
    name:"productType",
    fields:{
        _id:{type:GraphQLID},
        title:{type:GraphQLString},
        price:{type:GraphQLFloat},
        description:{type:GraphQLString},
        quantity:{type:GraphQLInt},
        message:{type:GraphQLString},
        categoryId:{type:new GraphQLObjectType({
            name:"categoryId",
            fields:{
                _id:{type:GraphQLID},
                name:{type:GraphQLString},
            }
            
        })}
    }
})