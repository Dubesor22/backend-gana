const Localidad = require("../models/Localidad");

const LocalidadController = {
  async getAll(req, res) {
    try {
      const localidad = await Localidad.find().limit(20);

      res.status(200).send(localidad);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al obtener las localidades",
      });
    }
  },

  async getLocalidad(req, res) {
    try {
      const { cp } = req.params;
      const localidad = await Localidad.find({ codigo_postal: cp });
      res.status(200).send(localidad);
    } catch (error) {
      console.error(error);
      res.status(500).send({
        message: "Ha habido un problema al obtener la localidad",
      });
    }
  },
};
module.exports = LocalidadController;
