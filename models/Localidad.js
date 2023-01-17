const mongoose = require("mongoose");

const LocalidadSchema = new mongoose.Schema({
  codigo_postal: String,
  municipio_id: String,
  municipio_nombre: String,
});

const Localidad = mongoose.model("Localidad", LocalidadSchema, "municipios");

module.exports = Localidad;
