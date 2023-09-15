const express = require("express");
const app = express();
const Router = require("./routes/Router");

app.use(express.json());
app.use(Router);
app.listen(3000);
