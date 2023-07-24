import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navbar}>

      <Link to="/home" className={styles.navbar_button}>
        Home
      </Link>
      <Link to="/form" className={styles.navbar_button}>
        Crea Tu Propio Perro
      </Link>
    </div>
  );
};
