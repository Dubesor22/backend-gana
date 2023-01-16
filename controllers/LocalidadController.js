const Localidad = require("../models/Localidad");

const LocalidadController = {
  async getLocalidad(req, res) {
    try {
      const localidad = await Localidad.find();
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
