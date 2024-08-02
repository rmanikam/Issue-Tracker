const mongoose = require("mongoose");

// connect to database
mongoose.connect("mongodb://127.0.0.1/project_development");

// check if connection is successful
const db = mongoose.connection;

// if there is error on connecting to database
db.on("error", console.error.bind(console, "error connecting to MongoDB"));

// if we are connected to database
db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
