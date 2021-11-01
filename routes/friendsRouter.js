const express = require("express");

const friendsRouter = express.Router();

friendsRouter.use(express.json());

friendsRouter.route("/").get((req, res, next) => {
  // Do something
});

module.exports = friendsRouter;
