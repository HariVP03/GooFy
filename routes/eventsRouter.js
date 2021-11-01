const express = require("express");

const eventsRouter = express.Router();

eventsRouter.use(express.json());

eventsRouter.route("/").get((req, res, next) => {
  // Do something
});

module.exports = eventsRouter;
