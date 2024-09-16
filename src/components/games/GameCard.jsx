import { useTranslation } from 'react-i18next';

export default function GameCard({game}) {
	const { _id, gameName } = game;
	const { t } = useTranslation();

	return (
		<div key={_id} className="card w-96 shadow-xl bg-light">
			<div className="card-body">
				<h2 className="card-title">{gameName}</h2>
				<p>If a dog chews shoes whose shoes does he choose?</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary">{t('PLAY')}</button>
				</div>
			</div>
		</div>
	);
}