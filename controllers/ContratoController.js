const Contrato = require("../models/Contrato");

const ContratoController = {
  async addcontract(req, res) {
    try {
      const contrato = await Contrato.create(req.body);
      res.status(201).send(contrato);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al crear el producto" });
    }
  },

  async listcontracts(req, res) {
    try {
      const contratos = await Contrato.find();
      res.status(200).send(contratos);
    } catch (error) {
      console.error(error);
      res
        .status(500)
        .send({ message: "Ha habido un problema al obtener los productos" });
    }
  },

  async getById(req, res) {
    try {
      const contrato = await Contrato.findById(req.params.id);
      res.status(200).send(contrato);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al obtener el producto por id",
      });
    }
  },

  async getByCp(req, res) {
    try {
      const contrato = await Contrato.find({
        codigoPostal: req.params.codigoPostal,
      });
      res.status(200).send(contrato);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message:
          "Ha habido un problema al obtener el producto por codigo postal",
      });
    }
  },

  async deletecontract(req, res) {
    try {
      const contrato = await Contrato.findByIdAndDelete(req.params.id);
      res.status(200).send(contrato);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al eliminar el producto",
      });
    }
  },

  async modifycontract(req, res) {
    try {
      const contrato = await Contrato.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.status(200).send(contrato);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al actualizar el producto",
      });
    }
  },
};
module.exports = ContratoController;
