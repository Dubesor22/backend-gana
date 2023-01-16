const mongoose = require("mongoose");

const LocalidadSchema = new mongoose.Schema({
  codigoPostal: Number,
  municipioId: Number,
  municipioNombre: String,
});

const Localidad = mongoose.model("Localidad", LocalidadSchema);

module.exports = Localidad;
