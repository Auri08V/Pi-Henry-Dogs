import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cards } from "../Cards/Cards";
import { SearchBar } from "../SearchBar/SearchBar";

import {
  getAllDogs,
  applyFilters,
  getFilterTemperaments,
  getAllTemperaments,
} from "../../redux/actions/actions";
import styles from "./Home.module.css";

export const Home = () => {
  const dispatch = useDispatch();
  const dogs = useSelector((state) => state.filteredDogs);
  const allTemperaments = useSelector((state) => state.allTemperaments);

  const [filter, setFilter] = useState({
    abc: "default",
    weight: "default",
    origin: "All",
    temperaments: "All",
  });

  useEffect(() => {
    dispatch(getAllDogs());
    dispatch(getAllTemperaments());
  }, [dispatch]);

  const handleFiltersTemperament = (event) => {
    event.preventDefault();
    dispatch(getFilterTemperaments(event.target.value));
  };

  const handleFilterOrigin = (event) => {
    setFilter({ ...filter, origin: event.target.value });
  };

  const handleSortByName = (event) => {
    setFilter({ ...filter, abc: event.target.value });
  };

  const handleSortByWeight = (event) => {
    setFilter({ ...filter, weight: event.target.value });
  };

  const handleFilters = (event) => {
    event.preventDefault();
    dispatch(applyFilters(filter));
  };

  return (
    <div
      className={`${styles.container} ${styles.veterinaryTheme} ${styles.themePrimary}`}
    >
      <SearchBar />
      <div className={`${styles.filterContainer} ${styles.themeLight}`}>
        <select className={styles.themeSecondary} onChange={handleSortByName}>
          <option value="default">Todos</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>

        <select className={styles.themeSecondary} onChange={handleSortByWeight}>
          <option value="default">Todos</option>
          <option value="Mayor Peso">Mayor Peso</option>
          <option value="Menor Peso">Menor Peso</option>
        </select>

        <select className={styles.themeSecondary} onChange={handleFilterOrigin}>
          <option value="All">Todos</option>
          <option value="creados">Creados</option>
          <option value="api">Api</option>
        </select>

        <select
          className={styles.themeSecondary}
          onChange={handleFiltersTemperament}
        >
          <option disabled value="">
            Temperamentos
          </option>
          <option value="All">Todos</option>
          {allTemperaments?.map((temp) => (
            <option value={temp.name} key={temp.id}>
              {temp.name}
            </option>
          ))}
        </select>

        <button className={styles.themeAccent} onClick={handleFilters}>
          Aplicar Filtro
        </button>
      </div>
      <div className={styles.cardsContainer}>
        <Cards dogs={dogs} />
      </div>
    </div>

  );
};
