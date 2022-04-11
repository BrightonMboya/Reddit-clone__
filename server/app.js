import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import subredditRouter from "./routes/subreddits.js";

const app = express();
app.use(express.json());
dotenv.config();


const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("Reddit clone!");
});
app.use("/api/subreddits", subredditRouter);


mongoose
  .connect(process.env.MONGOURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("db connection success");
    app.listen(port, () => console.log("API running on port: ", port));
  })
  .catch((error) => console.log(error));
