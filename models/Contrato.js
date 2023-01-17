const mongoose = require("mongoose");

const ContratoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
    },
    apellido1: {
      type: String,
      required: true,
    },
    apellido2: {
      type: String,
      required: true,
    },
    documento: {
      type: String,
      required: true,
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
