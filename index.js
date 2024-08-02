const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

app.use(express.static("./assets"));

app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }));

// extract style and scripts from sub pages into the layout

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// access route
app.use("/", require("./routes"));

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
