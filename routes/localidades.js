const express = require("express");

const router = express.Router();

const LocalidadController = require("../controllers/LocalidadController");

router.get("/", LocalidadController.getAll);
router.get("/:cp", LocalidadController.getByCp);

module.exports = router;
