const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;

app.use(express.json());

// app.use("/auth", );

const runServer = async () => {
  try {
    await mongoose.connect();


    
    app.listen(port, () => {
      console.log(`App is listening ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

runServer();
