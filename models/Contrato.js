const mongoose = require("mongoose");

const ContratoSchema = new mongoose.Schema(
  {
    name: String,
    apellido1: String,
    apellido2: String,
    documento: String,
    cp: Number,
    localidad: String,
    direccion: String,
    telefono: String,
  },
  { timestamps: true }
);

const Contrato = mongoose.model("Contrato", ContratoSchema);

module.exports = Contrato;
