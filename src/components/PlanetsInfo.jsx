import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const PlanetsInfo = () => {

    
    const [planetInfo, setPlanetInfo] = useState(null);
    const [description, setDescription] = useState(null);
    const { id } = useParams();
    
    
    const getPlanetInfo = async () => {
        const result = await fetch(`https://www.swapi.tech/api/planets/${id}`);
        const data = await result.json();

        setPlanetInfo(data.result.properties);
        setDescription(data.result.description);
    };

    useEffect(() => {
        getPlanetInfo();
    }, [id]);

    if (!planetInfo, !description) {
        return <span className="Loading">Loading...</span>;
    }

    return (
        <div className="card w-50 mb-3 cardInfo">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src="" className="img-fluid rounded-start" alt="A planet img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{planetInfo.name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <span><p>Climate</p>{planetInfo.climate}</span>
                <span><p>Surface water</p>{planetInfo.surface_water}</span>
                <span><p>Diameter</p>{planetInfo.diameter}</span>
                <span><p>Rotation period</p>{planetInfo.rotation_period}</span>
                <span><p>Terrain</p>{planetInfo.terrain}</span>
                <span><p>Gravity</p>{planetInfo.gravity}</span>
                <span><p>Population</p>{planetInfo.population}</span>
            </div>
        </div>
    )
}