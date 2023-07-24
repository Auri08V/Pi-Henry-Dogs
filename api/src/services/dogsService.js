require("dotenv").config();
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const { API_KEY } = process.env;

const url = `https://api.thedogapi.com/v1/breeds?apiKey=${API_KEY}`;

const getDogsFromApi = async () => {
  const response = await axios.get(url);
  const dogsApi = response.data.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image.url,
      height_Max: parseInt(dog.height.metric.split("-")[1]),
      height_Min: parseInt(dog.height.metric.split("-")[0]),
      weight_Max: parseInt(dog.weight.metric.split("-")[1]),
      weight_Min: parseInt(dog.weight.metric.split("-")[0]),
      years_of_life: dog.life_span,
      temperament: dog.temperament ? dog.temperament.split(", ") : [],
    };
  });

  return dogsApi;
};

const getDogsFromDB = async () => {
  const dbDogs = await Dog.findAll({
    include: {
      model: Temperament,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const formattedDbDogs = dbDogs.map((dog) => {
    return {
      id: dog.id,
      name: dog.name,
      image: dog.image,
      height_Max: dog.height_Max,
      height_Min: dog.height_Min,
      weight_Max: dog.weight_Max,
      weight_Min: dog.weight_Min,
      years_of_life: dog.years_of_life + " años",
      temperament: dog.temperaments.map((temp) => temp.name),
    };
  });

  return formattedDbDogs;
};

const getAllDogs = async () => {
  const apiDogs = await getDogsFromApi();
  const dbDogs = await getDogsFromDB();
  const allDogs = apiDogs.concat(dbDogs);
  return allDogs;
};

module.exports = {
  getAllDogs,
};
