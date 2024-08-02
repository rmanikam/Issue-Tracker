const Project = require("../models/project");

// controller for home
module.exports.home = async function (req, res) {
  try {
    // Fetch all the projects from database
    let projects = await Project.find({});

    return res.render("home", {
      title: "Issue Tracker | Home",
      projects: projects,
    });
  } catch (err) {
    console.log("Error", err);
    return;
  }
};
