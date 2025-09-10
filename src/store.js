import { act } from "react";
import { Favorites } from "./components/Favorites";

export const initialStore=()=>{
  return{
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    People: [],
    Planets: [],
    Vehicles: [],
    peopleFavorites: [],
    planetsFavorites: [],
    vehiclesFavorites: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'add_task':
      const { id,  color } = action.payload
      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case "people":
    const { personajes } = action.payload
    return {
      ...store,
      People: personajes
    };

    case "planets":
    const { planetas } = action.payload
    return {
      ...store,
      Planets: planetas
    };

    case "vehicles":
    const { vehiculos } = action.payload
    return {
      ...store,
      Vehicles: vehiculos
    };
    
    case "peopleFavorites":
    const peopleInFavorites = store.peopleFavorites.some(people => people.uid === action.payload.uid);
    if (peopleInFavorites) return store;
    return {
      ...store,
      peopleFavorites: [ ...store.peopleFavorites, action.payload ]
    }

    case "vehiclesFavorites":
    const vehiclesInFavorites = store.vehiclesFavorites.some(vehicles => vehicles.uid === action.payload.uid);
    if (vehiclesInFavorites) return store;
    return {
      ...store,
      vehiclesFavorites: [ ...store.vehiclesFavorites, action.payload ]
    }

    case "planetsFavorites":
    const planetsInFavorites = store.planetsFavorites.some(planets => planets.uid === action.payload.uid);
    if (planetsInFavorites) return store;
    return {
      ...store,
      planetsFavorites: [ ...store.planetsFavorites, action.payload ]
    }

    case "peopleDeleteFavorites": 
    return {
      ...store,
      peopleFavorites: [ ...store.peopleFavorites.filter(item => item.name !== action.payload.name) ]
    }

    case "vehiclesDeleteFavorites": 
    return {
      ...store,
      vehiclesFavorites: [ ...store.vehiclesFavorites.filter(item => item.name !== action.payload.name) ]
    }

    case "planetsDeleteFavorites": 
    return {
      ...store,
      planetsFavorites: [ ...store.planetsFavorites.filter(item => item.name !== action.payload.name) ]
    }

    default:
      throw Error('Unknown action.');
  }    
}