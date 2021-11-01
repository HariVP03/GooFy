const express = require("express");

const feedRouter = require("./feedsRouter");
const friendsRouter = require("./friendsRouter");
const groupsRouter = require("./groupsRouter");
const savedRouter = require("./savedRouter");
const eventsRouter = require("./eventsRouter");

const app = express();

app.use(express.json());

app.use("/", feedRouter);
app.use("/friends", friendsRouter);
app.use("/groups", groupsRouter);
app.use("/saved", savedRouter);
app.use("/events", eventsRouter);
