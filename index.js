import express from "express";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graph/schema.js";
import { connectionDB } from "./DB/connection.js";
import cors from 'cors'
const app = express();
const port = 5000;
app.use(express.json());
app.use(cors())
app.use(
  "/graphQl",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
connectionDB();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
