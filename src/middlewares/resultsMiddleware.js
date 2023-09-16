const disciplinas = require("../database/database");

function checkDisciplinaExists(req, res, next) {
  const { bimestre, disciplina } = req.body;

  const disciplinaExiste = disciplinas.some(
    (d) => d.bimestre === bimestre && d.disciplina === disciplina
  );

  if (disciplinaExiste) {
    return res
      .status(400)
      .json({ message: "Disciplina já existe no bimestre." });
  }

  next();
}

module.exports = checkDisciplinaExists;
