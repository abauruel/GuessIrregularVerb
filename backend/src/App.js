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
    mongoose.connect(
      "mongodb+srv://week7:week7@sandbox-ue8p9.mongodb.net/irregularVerbs?retryWrites=true&w=majority",
      {
        useNewUrlParser: true
      }
    );
  }

  routes() {
    this.server.use(routes);
  }
}

module.exports = new app().server;
