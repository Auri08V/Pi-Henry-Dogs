import React from "react";
import styles from "./Paginated.module.css";

export const Paginated = ({ dogPerPage, allDogs, paginado }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allDogs / dogPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.ul_container}>
      <ul>
        {pageNumbers.map((number) => (
          <li className={styles.li_container} key={number}>
            <button onClick={() => paginado(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
