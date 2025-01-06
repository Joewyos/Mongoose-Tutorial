import express from "express";
import connectDB from "./db/connectDb.js";
import { updateById } from "./models/Movies.js";

const app = express();
const port = process.env.PORT || 8000;
const DATABSE_URL =
  process.env.DATABSE_URL || "mongodb://127.0.0.1:27017/movies";

connectDB(DATABSE_URL);

updateById();

app.listen(port, () => console.log(`Server listening on port ${port}`));
