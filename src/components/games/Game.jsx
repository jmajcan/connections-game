/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useShallow } from 'zustand/react/shallow'
import { useParams } from "react-router-dom";
import useGameStore from "../../store/gameStore";
import QuestionCard from '../questions/QuestionCard';

export default function Game() {
  const params = useParams();
  const [selectedGame, setSelectedGame] = useState(null);
  const { currentGame, fetchGame } = useGameStore(
		useShallow((state) => ({
			currentGame: state.currentGame,
			fetchGame: state.fetchGame
		}))
	);

  useEffect(() => {
    const id = params.id?.toString() || undefined;
    fetchGame(id);
    setSelectedGame(currentGame);
  }, [params]);

  return (
    <div>
      {selectedGame ? (<h3 className="text-lg font-semibold p-4">{selectedGame.gameName}</h3>) : (<h3>Not Game Found</h3>)}
      <ul>
        {selectedGame ? selectedGame.questions.map((question, index) => {
          return (<li key={index} className='pb-2 pl-4'>{`${index + 1}.\t${question.question}`}</li>);
        }) : null}
      </ul>
    </div>
  );
}