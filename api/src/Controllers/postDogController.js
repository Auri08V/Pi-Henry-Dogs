const { Dog, Temperament } = require("../db");

const postDogController = async (req, res) => {
  let {
    name,
    image,
    height_Max,
    height_Min,
    weight_Min,
    weight_Max,
    years_of_life,
    temperament,
  } = req.body;
  console.log(req.body);

  try {
    const newDog = await Dog.create({
      name,
      image,
      height_Max,
      height_Min,
      weight_Min,
      weight_Max,
      years_of_life
    });

    if (temperament && temperament.length > 0) {
      const temperaments = await Temperament.findAll({
        where: {
          name: temperament,
        },
      });
      console.log(temperaments);
      await newDog.addTemperaments(temperaments);
    }

    res.status(201).json({
      message: "Perro creado exitosamente y relacionado con los temperamentos",
      dog: newDog,
      temperament: temperament,
    });
    console.log(temperament);
  } catch (error) {
    console.error("Error al crear el perro:", error);
    res.status(500).send("Error al crear el perro");
  }
};

module.exports = { postDogController };

