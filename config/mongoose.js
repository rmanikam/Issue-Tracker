const mongoose = require("mongoose");

// connect to database
mongoose.connect(
  "mongodb+srv://sahiraman7:Y8oBMVfbG6YlPUzj@cluster0.dncnotl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0y"
);

// check if connection is successful
const db = mongoose.connection;

// if there is error on connecting to database
db.on("error", console.error.bind(console, "error connecting to MongoDB"));

// if we are connected to database
db.once("open", function () {
  console.log("Connected to Database :: MongoDB");
});

module.exports = db;
