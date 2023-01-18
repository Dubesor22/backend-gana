const mongoose = require("mongoose");

const ContratoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      validate: /[a-z]/,
    },
    apellido1: {
      type: String,
      required: true,
      validate: /[a-z]/,
    },
    apellido2: {
      type: String,
      required: true,
      validate: /[a-z]/,
    },
    documento: {
      type: String,
      required: true,
      match: /^\d{8}[a-zA-Z]$/,
    },
    cp: {
      type: Number,
      required: true,
    },
    localidad: {
      type: String,
    },
    direccion: {
      type: String,
    },
    telefono: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Contrato = mongoose.model("Contrato", ContratoSchema);

module.exports = Contrato;
