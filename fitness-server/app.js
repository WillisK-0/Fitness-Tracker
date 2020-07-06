const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3001, (req, res) => {
  console.log("Server is running...");
});
