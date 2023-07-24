import axios from "axios";
import {
  GET_ALL_DOGS,
  GET_DOG_DETAILS_BY_ID,
  GET_DOG_BY_NAME,
  GET_ALL_TEMPERAMENTS,
  POST_CREATED_DOG,
  FILTERS,
  GET_FILTER_TEMPERAMENTS,
  LIMPIAR
} from "./actionsType";
//Todos los perros
export const getAllDogs = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/dogs/all");
      const dogs = response.data;
      dispatch({
        type: GET_ALL_DOGS,
        payload: dogs,
      });
    } catch (error) {
      console.error(
        "Error al obtener todos los perros (acción)",
        error.message
      );
    }
  };
};
//Seleciona un id y me lleva a DETAIL //
export const getDogDetailById = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/dogs/${id}`);
      dispatch({
        type: GET_DOG_DETAILS_BY_ID,
        payload: response.data
      });
    } catch (error) {
      console.log("Error en la acción de detalles del dog", error);
    }
  };
};
//Busca por nombre SearchBar//
export const getDogByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/dogs/name?name=${name}`
      );
      dispatch({
        type: GET_DOG_BY_NAME,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error en la acción de buscar por nombres", error);
    }
  };
};
//Me trae todos los temperamentos//
export const getAllTemperaments = () => {
  return async function (dispatch) {
    try {
      let response = await axios.get(`http://localhost:3001/temperaments`);
      dispatch({
        type: GET_ALL_TEMPERAMENTS,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error al obtener todos los temperamentos", error);
    }
  };
};
// Ruta post,para crear un juego
export const addDogs = (payload) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        "http://localhost:3001/createDog",
        payload
      );
   
      return dispatch({
        type: POST_CREATED_DOG,
        payload: response.data,
      });
    } catch (error) {
      console.error("Error en la accion para crear un juego", error.message);
    }
  };
};

//Filtros//
export const applyFilters = (filters) => {
  return {
    type: FILTERS,
    payload: filters,
  };
};

export const getFilterTemperaments = (payload) => {
  return {
    type: GET_FILTER_TEMPERAMENTS,
    payload,
  };
};

export const limpiarDetail = ()=>{
  return{
  type: LIMPIAR,

  }
}