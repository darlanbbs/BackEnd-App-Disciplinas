const express = require("express");
const app = express();
const Router = require("./routes/Router");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(Router);
app.listen(5000);
