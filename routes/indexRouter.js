const { Router } = require("express");
const {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
} = require("../controllers/databaseControllers");

const indexRouter = Router();

indexRouter.get("/", getUsernames);

indexRouter.get("/new", createUsernameGet);

indexRouter.post("/new", createUsernamePost);

module.exports = indexRouter;
