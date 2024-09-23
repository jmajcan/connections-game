import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { joinClassNames } from '../../helpers/joinClassNames';
import DefaultLogo from "../../assets/connection-default.png";

export default function GameCard({ game }) {
	const { _id, gameName, description } = game;
	const { t } = useTranslation();

	return (
		<div key={_id} className={joinClassNames(
			"card w-96 shadow-xl bg-light image-full",
			"transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
		)}>
			<figure>
				<img className={'brightness-50'} src={DefaultLogo} alt="Card Image" />
			</figure>
			<div className="card-body">
				<h2 className=" flex card-title border-b pb-2 justify-center">{gameName}</h2>
				<p>{description}</p>
				<div className="card-actions justify-end">
						<Link
							to={`/game/${_id}`}
						>
							<button className={joinClassNames(
								"btn bg-primary border-primary text-accent",
								"hover:bg-secondary hover:border-secondary"
							)}>
							{t('PLAY')}
							</button>
						</Link>
				</div>
			</div>
		</div>
	);
}