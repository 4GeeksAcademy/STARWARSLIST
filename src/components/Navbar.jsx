import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState } from "react"

export const Navbar = () => {

    const { store, dispatch } = useGlobalReducer();

    const count = store.peopleFavorites.length + store.planetsFavorites.length + store.vehiclesFavorites.length

    return (
        <div className="navbar">
            <Link to="/">
                <button className="btn btn-home">Home</button>
            </Link>
            <div>
                <img src="" alt="" />
            </div>
            <div className="btn-group">
                <Link to="/favorites">
                    <button type="button" className="btn">Favorites {count} </button>
                </Link>
                <button type="button" className="btn dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="visually-hidden">Toggle Dropdown</span>
                </button>
                <ul className="dropdown-menu">
                    <>
                        {store.peopleFavorites.map((item) => (
                            <li key={item.uid} className="dropdown-item">
                                <Link to={`/peopleInfo/${item.uid}`}>
                                    {item.name}
                                </Link>
                                <button className="deleteFavorite" onClick={(e) => {
                                    e.stopPropagation();
                                    dispatch({
                                        type: `peopleDeleteFavorites`,
                                        payload: item,
                                    });
                                }}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))
                        }
                        {store.planetsFavorites.map((item) => (
                            <li key={item.uid} className="dropdown-item">
                                <Link to={`/planetsInfo/${item.uid}`}>
                                    {item.name}
                                </Link>
                                <button className="thrashButton" onClick={() => {
                                    dispatch({
                                        type: `planetsDeleteFavorites`,
                                        payload: item,
                                    });
                                }}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))
                        }
                        {store.vehiclesFavorites.map((item) => (
                            <li key={item.uid} className="dropdown-item">
                                <Link to={`/vehiclesInfo/${item.uid}`}>
                                    {item.name}
                                </Link>
                                <button className="thrashButton" onClick={() => {
                                    dispatch({
                                        type: `vehiclesDeleteFavorites`,
                                        payload: item,
                                    });
                                }}>
                                    <i className="fa-solid fa-trash"></i>
                                </button>
                            </li>
                        ))
                        }
                    </>
                </ul>
            </div>
        </div>
    )
};