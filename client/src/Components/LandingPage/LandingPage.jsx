import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Bienvenido a mi API de Dogs!!</h1>
      <h2 className={styles.subtitle}>¡Descubre el amor incondicional de los perros en un solo lugar!</h2>
      <p className={styles.description}>
        ¿Estás listo para embarcarte en una aventura canina? Únete a nosotros y descubre un mundo de lamidas, travesuras y lealtad inquebrantable.
      </p>
      <Link to="/home" className={styles.link}>¡¡Explora el Mundo de los Perros Ahora!!</Link>
    </div>
  );
};
