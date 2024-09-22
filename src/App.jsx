import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import useGameStore from "./store/gameStore";
import { useEffect } from "react";
import Footer from "./components/Footer";
import './App.css';

const App = () => {
  const reset = useGameStore((state) => state.reset);

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="App bg-light">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default App
