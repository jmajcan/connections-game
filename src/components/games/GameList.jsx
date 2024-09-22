/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useShallow } from 'zustand/react/shallow'
import useGameStore from '../../store/gameStore';
import GameCard from "./GameCard";

export default function GameList() {
	const [games, setGames] = useState([]);
	const { allGames, fetchAllGames } = useGameStore(
		useShallow((state) => ({
			allGames: state.allGames,
			fetchAllGames: state.fetchAllGames
		}))
	);

	useEffect(() => {
		fetchAllGames();
		setGames(allGames);
	}, []);

	// This method will map out the records on the table
	const gamesList = () => {
		return games.map((game) => {
			return (
				<GameCard
					game={game}
					key={game._id}
				/>
			);
		});
	}

	// This following section will display the table with the records of individuals.
	return (
		<>
			<div className='flex flex-col justify-center items-center pt-8'>
				<div className="flex flex-col">
					<div className="grid grid-cols-2 gap-8">
						{gamesList()}
					</div>
				</div>
			</div>
		</>
	);
}