/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useShallow } from 'zustand/react/shallow'
import useGameStore from '../../store/gameStore';
import GameCard from "./GameCard";

export default function GameGrid() {
	const [games, setGames] = useState([]);
	const { allGames, fetchAllGames, resetCurrentGame } = useGameStore(
		useShallow((state) => ({
			allGames: state.allGames,
			fetchAllGames: state.fetchAllGames,
			resetCurrentGame: state.resetCurrentGame,
		}))
	);

	useEffect(() => {
		resetCurrentGame();
		fetchAllGames();
	}, []);

	useEffect(() => setGames(allGames), [allGames]);

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