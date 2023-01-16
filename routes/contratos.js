const express = require("express");

const router = express.Router();

const ContratoController = require("../controllers/ContratoController");

router.post("/", ContratoController.addcontract);
router.get("/", ContratoController.listcontracts);
router.get("/:id", ContratoController.getById);
router.delete("/:id", ContratoController.deletecontract);
router.put("/:id", ContratoController.modifycontract);

module.exports = router;
