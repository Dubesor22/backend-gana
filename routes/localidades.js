const express = require("express");

const router = express.Router();

const LocalidadController = require("../controllers/LocalidadController");

router.get("/", LocalidadController.getAll); // para probar que llegaba el JSON con todas los municipios
router.get("/:cp", LocalidadController.getLocalidad);

module.exports = router;
