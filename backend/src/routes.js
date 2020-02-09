const { Router } = require("express");

const routes = Router();

const IrregularVerb = require("./controllers/IrregularVerbsController");
const RandomVerb = require("./controllers/RandomVerbsController");

routes.post("/new", IrregularVerb.store);
routes.get("/list", IrregularVerb.index);
routes.get("/random", RandomVerb.index);

module.exports = routes;
