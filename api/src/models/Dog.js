const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dog", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_Max: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    height_Min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    weight_Min: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    weight_Max: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    years_of_life: {
      type: DataTypes.STRING,
    },

    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
