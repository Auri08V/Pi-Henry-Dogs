import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogByName } from "../../redux/actions/actions";
import styles from "./SearchBar.module.css";

export const SearchBar = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDogByName(name));
  };

  return (
    <div className={styles.searchbar_container}>
      <input
        className={styles.searchbar}
        type="text"
        placeholder="Buscar Perro"
        onChange={(e) => handleInputChange(e)}
      />
      <button
        className={styles.searchbar_button}
        type="submit"
        onClick={(e) => handleSubmit(e)}
      >
        Buscar
      </button>
    </div>
  );
};
