import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const VehiclesInfo = () => {

    
    const [vehicleInfo, setVehicleInfo] = useState(null);
    const [description, setDescription] = useState(null);
    const { id } = useParams();
    
    
    const getVehicleInfo = async () => {
        const result = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
        const data = await result.json();

        setVehicleInfo(data.result.properties);
        setDescription(data.result.description);
    };

    useEffect(() => {
        getVehicleInfo();
    }, [id]);

    if (!vehicleInfo, !description) {
        return <span className="Loading">Loading...</span>;
    }

    return (
        <div className="card w-50 mb-3 cardInfo">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src="" className="img-fluid rounded-start" alt="A vehicle img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{vehicleInfo.name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <span><p>Consumables</p>{vehicleInfo.consumables}</span>
                <span><p>Cargo capacity</p>{vehicleInfo.cargo_capacity}</span>
                <span><p>Passengers</p>{vehicleInfo.passengers}</span>
                <span><p>Crew</p>{vehicleInfo.crew}</span>
                <span><p>Model</p>{vehicleInfo.model}</span>
                <span><p>Cost in credits</p>{vehicleInfo.cost_in_credits}</span>
                <span><p>Class</p>{vehicleInfo.vehicle_class}</span>
            </div>
        </div>
    )
}