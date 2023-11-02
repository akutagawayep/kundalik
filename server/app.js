const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const postRouter = require("./postRouter");
const cors = require("cors");
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

app.use("/auth", authRouter);
app.use("/homeworks", postRouter);

mongoose.set("strictQuery", false);
const runServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://sandrina:qwerty123@cluster0.pbcttom.mongodb.net/`
    );

    app.listen(port, () => {
      console.log(`App is listening ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

runServer();
