const express = require("express");

const groupsRouter = express.Router();

groupsRouter.use(express.json());

groupsRouter.route("/").get((req, res, next) => {
  // Do something
});

module.exports = groupsRouter;
