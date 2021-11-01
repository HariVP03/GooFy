const express = require("express");

const savedRouter = express.Router();

savedRouter.use(express.json());

savedRouter.route("/").get((req, res, next) => {
  // Do something
});

module.exports = savedRouter;
