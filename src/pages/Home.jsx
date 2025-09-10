import { useEffect } from "react";
import { Card } from "../components/Cards.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	const getPeople = async () => {
		const result = await fetch("https://www.swapi.tech/api/people/");
		const data = await result.json();

		const { results } = data

		dispatch({
			type: "people",
			payload: { personajes: results }
		});
	};

	const getPlanets = async () => {
		const result = await fetch("https://www.swapi.tech/api/planets/");
		const data = await result.json();

		const { results } = data

		dispatch({
			type: "planets",
			payload: { planetas: results }
		});
	};

	const getVehicles = async () => {
		const result = await fetch("https://www.swapi.tech/api/vehicles/");
		const data = await result.json();

		const { results } = data

		dispatch({
			type: "vehicles",
			payload: { vehiculos: results }
		});
	};

	useEffect(() => {
		getPeople(); getPlanets(); getVehicles();
	}, []);

	return (
		<div className="container-fluid mt-5">
			<h2>Characters</h2>
			<div className="container">
				<ul className="CardList">
					{store.People.length === 0 ? (
						<span className="Loading">Loading...</span>
					) : (
						store.People.map((item, index) => (
							<li key={index}>
								<Card item={item} type="people" link="people"/>
							</li>
						))
					)}
				</ul>
			</div>
			<h2>Planets</h2>
			<div className="container">
				<ul className="CardList">
					{store.Planets.length === 0 ? (
						<span className="Loading">Loading...</span>
					) : (
						store.Planets.map((item, index) => (
							<li key={index}>
								<Card item={item} type="planets" link="planets"/>
							</li>
						))
					)}
				</ul>
			</div>
			<h2>Vehicles</h2>
			<div className="container">
				<ul className="CardList">
					{store.Vehicles.length === 0 ? (
						<span className="Loading">Loading...</span>
					) : (
						store.Vehicles.map((item, index) => (
							<li key={index}>
								<Card item={item} type="vehicles" link="vehicles"/>
							</li>
						))
					)}
				</ul>
			</div>
		</div>
	);
}; 