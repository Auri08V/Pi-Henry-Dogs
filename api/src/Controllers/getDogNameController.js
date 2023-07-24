const { getAllDogs } = require("../services/dogsService");

const getDogsByNameController = async (req, res) => {
  try {
    const { name } = req.query;
    const allDogs = await getAllDogs();

    if (name) {
      const filteredDogs = allDogs.filter((dog) =>
        dog.name.toLowerCase().includes(name.toLowerCase())
      );
      filteredDogs.length
        ? res.status(200).json(filteredDogs)
        : res.status(404).send("No se encontró ningún perro con ese nombre");
    } else {
      res.status(200).json(allDogs);
    }
  } catch (error) {
    console.error("Ha ocurrido un error al buscar por nombre:", error);
    res.status(500).json({ error: "Error al buscar por nombre" });
  }
};

module.exports = {
  getDogsByNameController,
};
