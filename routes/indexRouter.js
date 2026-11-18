const { Router } = require("express");
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  deleteAllUsernamesGet,
  deleteAllUsernamesPost,
} = require("../controllers/databaseControllers");

const indexRouter = Router();

indexRouter.get("/", getUsernames);

indexRouter.get("/new", createUsernameGet);

indexRouter.post("/new", createUsernamePost);

indexRouter.get("/delete", deleteAllUsernamesGet);

indexRouter.post("/delete", deleteAllUsernamesPost);

module.exports = indexRouter;
