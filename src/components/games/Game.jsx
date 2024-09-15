import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


export default function Game() {
  const params = useParams();
  const [game, setGame] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // async function fetchData() {
    //   const id = params.id?.toString() || undefined;
    //   if(!id) return;

    //   const response = await fetch(`http://localhost:5050/games/66e1455b667b9a5463f6baec`).then((response) => {
    //     console.log('response',response);
    //     if (!response.ok) {
    //       throw new Error(response.statusText, {cause: response});
    //     }
    //     return response.json();
    //   }).catch((error) => {
    //     console.log(error);
    //   });
    //   // if (!response.ok) {
    //   //   const message = `An error has occurred: ${response.statusText}`;
    //   //   console.error(message);
    //   //   return;
    //   // }

    //   // const game = await response.json();
    //   // if (!game) {
    //   //   console.warn(`Game with id ${id} not found`);
    //   //   navigate("/");
    //   //   return;
    //   // }
    //   // setGame(game);
    // }
    // fetchData();
    return;
  }, [params.id, navigate]);

  return (
    <>
      {game ? (<h3 className="text-lg font-semibold p-4">{game.gameName}</h3>) : (<h3>Not Game Found</h3>)}
      {game ? game.questions.map((question, index) => {
        return (<p key={index} className='pb-2 text-black'>{`${index + 1}.\t${question.question}`}</p>);
      }) : null}
    </>
  );
}