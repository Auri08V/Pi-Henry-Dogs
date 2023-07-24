import React from "react";
import { Card } from "../Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Paginated } from "../Paginated/Paginated";
import styles from "./Cards.module.css";

export const Cards = () => {
  const allDogs = useSelector((state) => state.allDogs);
  console.log("Datos de los perros:", allDogs);
  const [currentPage, setCurrentPage] = useState(1);
  const dogPerPage = 8;
  const indexOfLastDog = currentPage * dogPerPage;
  const indexOfFirstDog = indexOfLastDog - dogPerPage;
  const currentDogs = allDogs.slice(indexOfFirstDog, indexOfLastDog);
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Paginated
        dogPerPage={dogPerPage}
        allDogs={allDogs.length}
        paginado={paginado}
      />
      <div className={styles.container_cards}>
        {currentDogs.map(
          ({ id, name, image, temperament, weight_Max, weight_Min }) => {
            console.log("Temperamentos:", temperament);
            return (
              <div key={`dog-${id}`} className={styles.container_card}>
                <Card
                  id={id}
                  name={name}
                  image={image}
                  temperament={temperament}
                  weight_Min={weight_Min}
                  weight_Max={weight_Max}
                />
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
