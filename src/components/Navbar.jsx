import { NavLink } from "react-router-dom";
import DefaultLogo from "../assets/default-logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6 py-2 px-4 bg-primary">
        <NavLink to="/">
          <img alt="Game logo" className="h-10 inline" src={DefaultLogo}></img>
        </NavLink>
      </nav>
    </div>
  );
}