const express = require("express");

const feedsRouter = express.Router();

feedsRouter.use(express.json());

feedsRouter.route("/").get((req, res, next) => {
  // Do something
});

module.exports = feedsRouter;
