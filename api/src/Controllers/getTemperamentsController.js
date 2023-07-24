const { Temperament } = require("../db");
const { API_KEY } = process.env;
const axios = require("axios");

const getAllTemperamentsController = async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.thedogapi.com/v1/breeds?key=${API_KEY}`
    );
    const allDogs = response.data;
    const allTemperaments = new Set(); 

    allDogs.forEach((dog) => {
      const dogTemperaments = dog.temperament?.split(", ") || [];
      dogTemperaments.forEach((temperament) => allTemperaments.add(temperament));
    });

    const uniqueTemperaments = Array.from(allTemperaments);
    await Promise.all(
      uniqueTemperaments.map((temperament) =>
        Temperament.findOrCreate({
          where: { name: temperament },
        })
      )
    );

    const allTemperamentsData = await Temperament.findAll();
    res.status(200).json(allTemperamentsData);
  } catch (error) {
    console.error("Error al obtener los temperamentos:", error);
    res.status(500).send("Error al obtener los temperamentos");
  }
};

module.exports = { getAllTemperamentsController };

