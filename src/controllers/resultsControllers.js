let disciplinas = require("./../database/database");
const uuid = require("uuid");

function getDisciplinas(req, res) {
  res.send(disciplinas);
}

function getDisciplina(req, res) {
  const disciplina = disciplinas.find((d) => d.id == req.params.id);

  if (!disciplina) {
    return res.status(404).json({ message: "Disciplina não encontrada." });
  }

  res.send(disciplina);
}

module.exports = {
  getDisciplinas,
  getDisciplina,
};
