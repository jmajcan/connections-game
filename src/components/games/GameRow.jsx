import { Link } from "react-router-dom";

export default function GameRow({ game }) {
	const { _id, gameName } = game;
	console.log('game', game);

	return (
		<tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
			<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
				{gameName}
			</td>
			<td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
				<div className="flex gap-2">
					<Link
						className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-slate-100 h-9 rounded-md px-3"
						to={`/game/${_id}`}
					>
						Play
					</Link>
				</div>
			</td>
		</tr>
	)
};