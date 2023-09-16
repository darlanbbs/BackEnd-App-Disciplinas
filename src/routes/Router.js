const express = require("express");
const Router = express();
const {
  addDisciplina,
  deleteAvaliacao,
  getDisciplina,
  getDisciplinas,
  updateAvaliacao,
} = require("./../controllers/resultsControllers");

Router.get("/disciplinas", getDisciplinas);
Router.get("/disciplinas/:id", getDisciplina);
Router.post("/disciplinas", addDisciplina);
Router.put("/disciplinas/:id", updateAvaliacao);
Router.delete("/disciplinas/:id", deleteAvaliacao);

module.exports = Router;
