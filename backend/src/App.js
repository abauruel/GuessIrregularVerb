require("dotenv/config");
const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

class app {
  constructor() {
    this.server = express();
    this.middleware();
    this.database();
    this.routes();
  }
  middleware() {
    this.server.use(express.json());
  }
  database() {
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new app().server;
