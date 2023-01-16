const express = require("express");

const app = express();

const PORT = 8080;

const { dbConnection } = require("./config/config");

app.use(express.json());

app.use("/contratos", require("./routes/Contratos"));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
