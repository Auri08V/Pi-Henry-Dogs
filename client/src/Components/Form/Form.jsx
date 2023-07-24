import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getAllTemperaments, addDogs } from "../../redux/actions/actions";
import styles from "./Form.module.css";

const Validate = (input) => {
  let errors = {};
  if (!input.name) {
    errors.name = "Nombre requerido";
  }
  if (!input.weight_Min || !input.weight_Max) {
    errors.weight_Min = "Peso mínimo requerido";
    errors.weight_Max = "Peso máximo requerido";
  }
  if (!input.height_Min || !input.height_Max) {
    errors.height_Min = "Altura mínima requerida";
    errors.height_Max = "Altura máxima requerida";
  }
  if (!input.years_of_life) {
    errors.years_of_life = "Años de vida requeridos";
  }
  return errors;
};

export const Form = () => {
  const allTemperaments = useSelector((state) => state.allTemperaments);
  const history = useHistory();
  const dispatch = useDispatch();

  const [button, setButton] = useState(true);
  const [errors, setErrors] = useState({
    name: "",
    height_Max: "",
    height_Min: "",
    weight_Max: "",
    weight_Min: "",
    years_of_life: "",
    image: "",
  });

  const [input, setInput] = useState({
    name: "",
    weight_Max: "",
    weight_Min: "",
    height_Max: "",
    height_Min: "",
    years_of_life: "",
    image: "",
    temperament: [],
    createdInDb: true,
  });

  useEffect(() => {
    dispatch(getAllTemperaments());
  }, [dispatch]);

  useEffect(() => {
    const validationErrors = Validate(input);
    setErrors(validationErrors);

    if (
      input.name.length > 0 &&
      input.height_Max > 0 &&
      input.height_Min > 0 &&
      input.weight_Max > 0 &&
      input.weight_Min > 0 &&
      input.years_of_life > 0
    ) {
      setButton(false);
    } else {
      setButton(true);
    }
  }, [input]);

  const handleInputChange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      Validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSelect = (event) => {
    const selectedOption = event.target.value;

    if (!input.temperament.includes(selectedOption)) {
      setInput((prevInput) => ({
        ...prevInput,
        temperament: [...prevInput.temperament, selectedOption],
      }));
    } else {
      setInput((prevInput) => ({
        ...prevInput,
        temperament: prevInput.temperament.filter(
          (temp) => temp !== selectedOption
        ),
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input.temperament);
    dispatch(addDogs(input));
    setInput({
      name: "",
      weight_Max: "",
      weight_Min: "",
      height_Max: "",
      height_Min: "",
      years_of_life: "",
      image: "",
      temperament: [],
      createdInDb: true,
    });
    history.push("/home");
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.formBox}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.form__label}>Nombre del Perro</label>
          <input
            type="text"
            value={input.name}
            name="name"
            onChange={handleInputChange}
            className={styles.form__input}
          />
          {errors.name && (
            <span className={styles.form__error}>{errors.name}</span>
          )}

          <label className={styles.form__label}>Peso Minimo</label>
          <input
            type="text"
            value={input.weight_Min}
            name="weight_Min"
            onChange={handleInputChange}
            className={styles.form__input}
          />
          {errors.weight_Min && (
            <span className={styles.form__error}>{errors.weight_Min}</span>
          )}

          <label className={styles.form__label}>Peso Maximo</label>
          <input
            type="text"
            value={input.weight_Max}
            name="weight_Max"
            onChange={handleInputChange}
            className={styles.form__input}
          />
          {errors.weight_Max && (
            <span className={styles.form__error}>{errors.weight_Max}</span>
          )}

          <label className={styles.form__label}>Altura Minima</label>
          <input
            type="text"
            value={input.height_Min}
            name="height_Min"
            onChange={handleInputChange}
            className={styles.form__input}
          />
          {errors.height_Min && (
            <span className={styles.form__error}>{errors.height_Min}</span>
          )}

          <label className={styles.form__label}>Altura Maxima</label>
          <input
            type="text"
            value={input.height_Max}
            name="height_Max"
            onChange={handleInputChange}
            className={styles.form__input}
          />
          {errors.height_Max && (
            <span className={styles.form__error}>{errors.height_Max}</span>
          )}

          <label className={styles.form__label}>Años de Vida</label>
          <input
            type="text"
            value={input.years_of_life }
            name="years_of_life"
            onChange={handleInputChange}
            className={styles.form__input}
          />
          {errors.years_of_life && (
            <span className={styles.form__error}>{errors.years_of_life}</span>
          )}

          <label className={styles.form__label}>Imagen</label>
          <input
            type="text"
            value={input.image}
            name="image"
            onChange={handleInputChange}
            className={styles.form__input}
          />

          <label className={styles.form__label}>Temperamentos</label>
          <div className={styles.form__temperament}>
            <select multiple onChange={handleSelect} value={input.temperament}>
              {allTemperaments.map((t) => (
                <option value={t.name} key={t.name}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            disabled={button}
            className={styles.form__button}
          >
            Guardar Datos
          </button>
        </form>
      </div>
    </div>
  );
};
