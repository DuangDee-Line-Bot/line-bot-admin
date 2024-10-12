"use strict";

require("dotenv").config();
const express = require("express");
const { middleware } = require("@line/bot-sdk");
const bodyParser = require("body-parser");

const config = {
  channelAccessToken: process.env.channelAccessToken,
  channelSecret: process.env.channelSecret,
};

const app = express();

app.use(middleware(config));

app.use(bodyParser.json());
const home = (req, res) => {
  res.send("Hello, World!");
};
// webhook callback
app.post("/home", home);
// Use the controller to handle webhook
const lineController = require("./controllers/lineController");
app.post("/webhook", lineController.handleWebhook);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
