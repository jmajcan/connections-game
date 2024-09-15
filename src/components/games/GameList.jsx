/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { fetchGames } from "../../api/GameService";
import GameRow from "./GameRow";

export default function GameList() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		const getGames = async () => {
			const response = await fetchGames();
			setGames(response);
			return response;
		}
		getGames();
	}, []);


	// This method will map out the records on the table
	const gamesList = () => {
		return games.map((game) => {
			return (
				<GameRow
					game={game}
					key={game._id}
				/>
			);
		});
	}

	// This following section will display the table with the records of individuals.
	return (
		<>
			<h3 className="text-lg font-semibold p-4">Games</h3>
			<div className="border rounded-lg overflow-hidden">
				<div className="relative w-full overflow-auto">
					<table className="w-full caption-bottom text-sm">
						<tbody className="[&_tr:last-child]:border-0">
							{gamesList()}
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}