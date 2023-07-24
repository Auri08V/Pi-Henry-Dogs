const { getAllDogs } = require("../services/dogsService");

const getDogByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const allDogs = await getAllDogs();
    const filteredDogs = allDogs.filter((dog) => dog.id == id);
    if (filteredDogs.length) {
      res.status(200).json(filteredDogs);
      console.log(filteredDogs)
    } else {
      res.status(404).send("No se encontró ningún perro con ese ID");
    }
  } catch (error) {
    console.error("Error al buscar perro por ID:", error);
    res.status(500).send("Error al buscar perro por ID");
  }
};

module.exports = { getDogByIdController };
