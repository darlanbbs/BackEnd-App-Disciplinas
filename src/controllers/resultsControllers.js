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

function addDisciplina(req, res) {
  const now = new Date();

  const { bimestre, nota, disciplina } = req.body;

  if (!bimestre || !nota || !disciplina) {
    return res.status(400).json({ message: "Preencha todos os campos." });
  }

  if (nota < 0 || nota > 10) {
    return res.status(400).json({ message: "Nota inválida." });
  }

  const disciplinaExiste = disciplinas.some(
    (d) => d.bimestre === bimestre && d.disciplina === disciplina
  );

  if (disciplinaExiste) {
    return res
      .status(400)
      .json({ message: "Disciplina já existe no bimestre." });
  }

  const novaAvaliacao = {
    id: uuid.v4(),
    disciplina,
    bimestre,
    nota,
    criado_em: `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`,
    atualizado_em: `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`,
  };

  disciplinas.push(novaAvaliacao);
  res.status(200).json(novaAvaliacao);
}

function updateAvaliacao(req, res) {
  const now = new Date();
  const { id } = req.params;
  const { nota } = req.body;

  const disciplinaFinded = disciplinas.find((d) => d.id == id);

  if (!disciplinaFinded) {
    return res
      .status(404)
      .json({ message: "DisciplinaFinded não encontrada." });
  }

  if (!disciplinaFinded.bimestre) {
    return res.status(404).json({ message: "Bimestre não encontrado." });
  }

  if (nota > 0 && nota <= 10) disciplinaFinded.nota = nota;

  disciplinaFinded.disciplina.atualizado_em = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;
  res.status(200).send(disciplinaFinded);
}

function deleteAvaliacao(req, res) {
  const { id } = req.params;
  const disciplina = disciplinas.find((d) => d.id == id);

  if (!disciplina) {
    return res.status(404).json({ message: "Disciplina não encontrada." });
  }
  let filteredDisciplina = disciplinas.filter((id) => id.id !== disciplina.id);
  disciplinas = filteredDisciplina;
  res.status(200).send("Disciplina deletada com sucesso!");
}

module.exports = {
  getDisciplinas,
  getDisciplina,
  addDisciplina,
  updateAvaliacao,
  deleteAvaliacao,
};
