const express = require("express");
const app = express();
const mongoose = require("mongoose");
const authRouter = require("./authRouter");
const port = 5000;

app.use(express.json());
app.use("/auth", authRouter);

const runServer = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://sandrina:qwerty123@cluster0.pbcttom.mongodb.net/auth_roles?retryWrites=true&w=majority`
    );

    app.listen(port, () => {
      console.log(`App is listening ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

runServer();
