import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = ({
  id,
  name,
  image,
  temperament,
  weight_Max,
  weight_Min,
}) => {
  const allTemperaments = Array.isArray(temperament) ? temperament : [];
  const combinedTemperaments = allTemperaments.concat();

  return (
    <div className={styles.main_container}>
      <Link to={`/detail/${id}`} className={styles.link}>
        <div className={styles.image_container}>
          <img src={image} alt={name} className={styles.img} />
        </div>
        <h3 className={styles.name}>{name}</h3>
      </Link>
      <div className={styles.details_container}>
        <p>Peso Mínimo: {weight_Min} Kg</p>
        <p>Peso Máximo: {weight_Max} Kg</p>
        <div className={styles.temperaments_container}>
          <h3>Temperamentos:</h3>
          {combinedTemperaments.length > 0 ? (
            combinedTemperaments.map((temp, index) => (
              <p key={index} className={styles.temperament}>
                {temp}
              </p>
            ))
          ) : (
            <p className={styles.temperament}>
              No se encontraron temperamentos.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
