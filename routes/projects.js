const express = require("express");

const router = express.Router();

// Access projectsController

const projectsController = require("../controllers/project_controller");

// Access issueController

const issueController = require("../controllers/issue_controller");

// Route to handle creation of project
router.post("/create", projectsController.create);

// Route to handle rendering of project form
router.get("/create", projectsController.projectForm);

// Route to handle view of project
router.get("/:id", projectsController.view);

// Route to handle filtering of the issues and search
router.get("/:id/filter", projectsController.filter);

// Route to handle deletion of project
router.post("/:id/delete", projectsController.delete);

// Route to handle rendering of issue creation form
router.get("/:id/issues/new", issueController.createIssueForm);

// Route for creation of a new issue
router.post("/:id/issues", issueController.createIssue);

module.exports = router;
