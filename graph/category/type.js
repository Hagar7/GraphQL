import {  GraphQLID,  GraphQLObjectType, GraphQLString } from "graphql";



export const categoryType = new GraphQLObjectType({
    name:"categoryType",
    fields:{
        _id:{type:GraphQLID},
        name:{type:GraphQLString},
    }
})