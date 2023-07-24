const { getAllDogs } = require("../services/dogsService");

const getAllDogsController = async (req, res) => {
  try {
    const dogsData = await getAllDogs();
    res.status(200).json(dogsData); 
  } catch (error) {
    console.error("Error al obtener los perros de la API:", error);
    res.status(500).json({ error: error.message || "Error al obtener los perros de la API" });
  }
};

module.exports = { getAllDogsController };
