const mongoose = require("mongoose");

//Database
mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
      autoIndex: true,
  })
  .then(() => console.log("Connected to database"))
  .catch((err) => console.log(err));

  module.exports = mongoose;