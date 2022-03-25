const express = require("express");
const connect = require("./configs/db");
const cors = require("cors");
require("dotenv").config();

const bookController = require("./controllers/book.controller");
const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/books", bookController);

app.listen(PORT, async function () {
  try {
    await connect();
    console.log("listening on port 2345");
  } catch (e) {
    console.log(e.message);
  }
});
