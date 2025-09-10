import { Card } from "./Cards.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Favorites = ({ item }) => {

    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="container-fluid mt-5">
            <h2>Characters:</h2>
            <div className="container">
                <ul className="CardList">
                    {store.peopleFavorites.length === 0 ? (
                        <span className="Loading">No favorites added</span>
                    ) : (
                        store.peopleFavorites.map((item, index) => (
                            <li key={index}>
                                <Card item={item} type="people" link="people"/>
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <h2>Planets:</h2>
            <div className="container">
                <ul className="CardList">
                    {store.planetsFavorites.length === 0 ? (
                        <span className="Loading">No favorites added</span>
                    ) : (
                        store.planetsFavorites.map((item, index) => (
                            <li key={index}>
                                <Card item={item} type="planets" link="planets"/>
                            </li>
                        ))
                    )}
                </ul>
            </div>
            <h2>Vehicles:</h2>
            <div className="container">
                <ul className="CardList">
                    {store.vehiclesFavorites.length === 0 ? (
                        <span className="Loading">No favorites added</span>
                    ) : (
                        store.vehiclesFavorites.map((item, index) => (
                            <li key={index}>
                                <Card item={item} type="vehicles" link="vehicles"/>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}