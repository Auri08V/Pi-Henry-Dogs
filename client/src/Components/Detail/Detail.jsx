import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogDetailById,limpiarDetail} from "../../redux/actions/actions";
import styles from "./Detail.module.css";
import gif from "../../assets/Loading.gif"

export const Detail = (props) => {
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(getDogDetailById(props.match.params.id))
    return(
     ()=>dispatch(limpiarDetail())
    )

  }, [dispatch, props.match.params.id]);

  const allTemperaments = dog[0]?.temperaments
    ? dog[0].temperaments.map((temperament) => temperament.name)
    : [];
  const combinedTemperaments = allTemperaments.concat(
    dog[0]?.temperament || []
  );

  return (
    <div className={styles.detail}>
      {dog.length > 0 ? (
        <div className={styles.detail__content}>
          <h1 className={styles.detail__name}>{dog[0].name}</h1>
          <div className={styles.detail__info}>
            <div className={styles.detail__imageContainer}>
              <img
                src={dog[0].image}
                alt={dog[0].name}
                className={styles.detail__image}
              />
            </div>
            <div className={styles.detail__data}>
              <div className={styles.detail__section}>
                <h3>Peso</h3>
                <p>
                  Mínimo: <span>{dog[0].weight_Min} kg</span>
                </p>
                <p>
                  Máximo: <span>{dog[0].weight_Max} kg</span>
                </p>
              </div>
              <div className={styles.detail__section}>
                <h3>Altura</h3>
                <p>
                  Mínima: <span>{dog[0].height_Min} cm</span>
                </p>
                <p>
                  Máxima: <span>{dog[0].height_Max} cm</span>
                </p>
              </div>
              <div className={styles.detail__section}>
                <h3>Años de Vida</h3>
                <p>{dog[0].years_of_life}</p>
              </div>
              <div className={styles.detail__section}>
                <div className={styles.detail__temperamentList}>
                  <h3>Temperamentos:</h3>
                  {combinedTemperaments.length > 0 ? (
                    combinedTemperaments.map((temp, index) => (
                      <p key={index}>{temp}</p>
                    ))
                  ) : (
                    <p>No se encontraron temperamentos.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={styles.detail__loading}>
          <img src={gif} alt=""></img>
        </div>
      )}
    </div>
  );
};
