import { useParams } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect, useState } from "react";

export const PeopleInfo = () => {

    
    const [peopleInfo, setPeopleInfo] = useState(null);
    const [description, setDescription] = useState(null);
    const { id } = useParams();
    
    
    const getPeopleInfo = async () => {
		const result = await fetch(`https://www.swapi.tech/api/people/${id}`);
		const data = await result.json();

        setPeopleInfo(data.result.properties);
        setDescription(data.result.description);
	};

    useEffect(() => {
        getPeopleInfo();
    }, [id]);

    if (!peopleInfo, !description) {
        return <span className="Loading">Loading...</span>;
    }

    return (
        <div className="card cardInfo">
            <div className="row g-0">
                <div className="col-md-6">
                    <img src="" className="img-fluid rounded-start" alt="A character img" />
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <h5 className="card-title">{peopleInfo.name}</h5>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
            <div className="card-footer">
                <span><p>Gender</p>{peopleInfo.gender}</span>
                <span><p>Skin color</p>{peopleInfo.skin_color}</span>
                <span><p>Hair color</p>{peopleInfo.hair_color}</span>
                <span><p>Height</p>{peopleInfo.height}</span>
                <span><p>Eye color</p>{peopleInfo.eye_color}</span>
                <span><p>Mass</p>{peopleInfo.mass}</span>
                <span><p>Birth year</p>{peopleInfo.birth_year}</span>
            </div>
        </div>
    )
}