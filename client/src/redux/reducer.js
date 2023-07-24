import {
  GET_ALL_DOGS,
  GET_DOG_DETAILS_BY_ID,
  GET_DOG_BY_NAME,
  GET_ALL_TEMPERAMENTS,
  FILTERS,
  GET_FILTER_TEMPERAMENTS,
  POST_CREATED_DOG,
  LIMPIAR
} from "./actions/actionsType";

const initialState = {
  allDogs: [],
  filteredDogs: [],
  detail: [],
  allTemperaments: [],
  limpiar : []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
   
   //Trae todos los perros
    case GET_ALL_DOGS:
      return {
        ...state,
        allDogs: action.payload,
        filteredDogs: action.payload,
      };
  // Detail
    case GET_DOG_DETAILS_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };

      case LIMPIAR :
        return{
          ...state,
          limpiar: [...state.detail]
        }
  //SearchBar
    case GET_DOG_BY_NAME:
      return {
        ...state,
        allDogs: action.payload,
      };
  //Todos los temperamentos home/form
    case GET_ALL_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: action.payload,
      };

    case POST_CREATED_DOG:
      return {
        ...state,
        allDogs: [...state.allDogs, action.payload],
      };

    case FILTERS:
      let asd = state.filteredDogs.slice();// Hacer una copia del array para no modificar el estado actual directamente

      if (action.payload.origin === "creados") {
        asd = asd.filter((dog) => dog.id.length > 3);
      } else if (action.payload.origin === "api") {
        asd = asd.filter((dog) => !dog.createdInDb );
      }

      if (action.payload.weight === "Mayor Peso") {
        asd.sort((a, b) => parseFloat(b.weight_Max) - parseFloat(a.weight_Max));
      } else if (action.payload.weight === "Menor Peso") {
        asd.sort((a, b) => parseFloat(a.weight_Max) - parseFloat(b.weight_Max));
      }
      

      if (action.payload.abc === "asc") {
        asd.sort((a, b) => a.name.localeCompare(b.name));
      } else if (action.payload.abc === "desc") {
        asd.sort((a, b) => b.name.localeCompare(a.name));
      }

      return {
        ...state,
        allDogs: asd,
      };
    case GET_FILTER_TEMPERAMENTS:
      const allDogs = state.filteredDogs;
      let filteredDogs = [];

      if (action.payload === "All") {
        filteredDogs = state.allDogs;
      } else {
        filteredDogs = allDogs.filter((dog) => {
          const temperament = dog.temperament;
          return temperament && temperament.includes(action.payload);
        });
      }

      return {
        ...state,
        allDogs: filteredDogs,
      };

    default:
      return state;
  }
};

export default rootReducer;
