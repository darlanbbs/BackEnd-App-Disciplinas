const express = require("express");
const app = express();
const Router = require("./routes/Router");
const cors = require("cors");
require("dotenv").config();

app.use(cors());
app.use(express.json());
app.use(Router);
app.listen(process.env.PORT);
