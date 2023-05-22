import mongoose from "mongoose";

export const connectionDB = async () => {
  return mongoose
    .connect("mongodb+srv://hagar:hagar239hagar@cluster0.tzesjty.mongodb.net/graphql")
    .then((res) => console.log("Db connection is running successfully"))
    .catch((err) => console.log("Db connection failed"));
};
