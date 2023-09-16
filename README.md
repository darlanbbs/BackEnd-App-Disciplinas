# BackEnd-Desafio

# Descrição

O BackEnd desta aplicação é responsável por gerenciar as operações relacionadas às disciplinas e avaliações. Ele foi construído utilizando Node.js e Express.js para fornecer uma API robusta.<br>
O FrontEnd desta aplicação esta aqui >> https://github.com/darlanbbs/Front-End-Desafio
# Tecnologias Utilizadas

Node.js: Plataforma de execução de código JavaScript do lado do servidor.<br>
Express.js: Framework web para Node.js que simplifica a criação de aplicativos web e APIs.<br>
UUID: Biblioteca para geração de identificadores únicos.<br>

# Instalação e Execução
- Certifique-se de ter o Node.js instalado em seu ambiente.
- Clone a aplicação
- No diretório raiz do backend, execute o comando npm install para instalar as dependências.
- Caso queira rodar a aplicação na web está aqui >> https://github.com/darlanbbs/Front-End-Desafio
- Para iniciar o servidor, execute npm run dev.

# Endpoints da API
  - GET /disciplinas<br>
Descrição: Retorna todas as disciplina<br>
Resposta:
```js
[
  {
    "id": "1",
    "disciplina": "Sociologia",
    "bimestre": "Bimestre 1",
    "nota": 8.5,
    "criado_em": "2023-09-14 15:30:00",
    "atualizado_em": "2023-09-14 15:30:00"
  },
  // ...
]
```

- GET /disciplinas/:id<br>
 Descrição: Retorna uma disciplina com base no ID.<br>
Resposta:
```js
  "id": "1",
  "disciplina": "Sociologia",
  "bimestre": "Bimestre 1",
  "nota": 8.5,
  "criado_em": "2023-09-14 15:30:00",
  "atualizado_em": "2023-09-14 15:30:00"
```

- POST /disciplinas<br>
  Descrição: Adiciona uma nova disciplina.<br>
  Corpo da Requisição(body)<br>
```js
  {
  "disciplina": "Artes",
  "bimestre": "Bimestre 2",
  "nota": 9.5
}
```
Resposta
```js
  {
  "id": "2",
  "disciplina": "Artes",
  "bimestre": "Bimestre 2",
  "nota": 9.5,
  "criado_em": "2023-09-14 16:00:00",
  "atualizado_em": "2023-09-14 16:30:00"
}
```
- Delete /disciplinas/:id<br>
 Descrição: Exclui uma disciplina com base no ID.<br>
Resposta:Disciplina deletada com sucesso!

