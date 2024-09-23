import { NavLink } from "react-router-dom";
import DefaultLogo from "../assets/default-logo.png";
import useGameStore from "../store/gameStore";

export default function Navbar() {
  const currentGame = useGameStore(state => state.currentGame);
  // flex justify-between items-center mb-6 py-2 px-4 bg-primary

  return (
    <div className='navbar bg-primary'>
      <div className='navbar-start'>
        <NavLink to="/">
          <img alt="Game logo" className="h-10 inline" src={DefaultLogo}></img>
        </NavLink>
      </div>
      <nav>
        {currentGame && <h1 className="navbar-center text-xl text-accent">{currentGame.gameName}</h1>}
      </nav>
    </div>
  );
}