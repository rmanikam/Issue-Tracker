const Project = require("../models/project");
const Issue = require("../models/issue");

// Controller for rendering the create issue form
module.exports.createIssueForm = (req, res) => {
  const projectId = req.params.id;
  res.render("create_issue", { projectId, title: "Create Issue" });
};

// Controller for creating a new issue
module.exports.createIssue = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author, labels } = req.body;

    const issue = await Issue.create({
      title,
      description,
      author,
      labels,
    });

    // Find the project using id and update the issues array
    // in this project with the new issue that is created

    const project = await Project.findByIdAndUpdate(
      id,
      { $push: { issues: issue._id } },
      { new: true }
    );

    // If project doesnot exist then send error message
    if (!project) {
      return res.status(404).send("Project not found");
    }

    // Redirect to the project detail page
    return res.redirect(`/project/${id}`);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Internal Server Error");
  }
};
