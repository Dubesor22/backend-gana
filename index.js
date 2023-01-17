const express = require("express");
const app = express();

const cors = require("cors");

// const allowedOrigins = [
//   "http://localhost:3000",
//   "http://localhost:3001",
//   "http://localhost:8080",
// ];
// const corsOptions = {
//   origin: (origin, callback) => {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
//   optionsSuccessStatus: 200,
//   exposedHeaders: ["Content-Range", "X-Content-Range"],
//   credentials: true,
//   maxAge: 3600,
// };
app.use(cors());

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const { dbConnection } = require("./config/config");

app.use(express.json());

app.use("/contratos", require("./routes/contratos"));
app.use("/localidades", require("./routes/localidades"));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
