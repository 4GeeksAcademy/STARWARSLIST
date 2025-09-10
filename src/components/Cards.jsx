import { Link } from 'react-router-dom';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Card = ({ item, type, link }) => {

    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to={`/${link}Info/${item.uid}`}>
                        <button className="CardButton">Learn more!</button>
                    </Link>
                    <div>
                        <button className="heartButton" onClick={() => {
                            dispatch({
                                type: `${type}Favorites`,
                                payload: item
                            });
                        }}>
                            <i className="fa-solid fa-heart"></i>
                        </button>
                        <button className="thrashButton" onClick={() => {
                            dispatch({
                                type: `${type}DeleteFavorites`,
                                payload: item,
                            });
                        }}>
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}