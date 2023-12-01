// home.jsx
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react"; 
import { PokemonContext } from "../context/PokemonContext.js";
import "./home.css";
import pikachu from "../assets/SI_Pokemon.jpg";


export const Home = () => {
  const { getPokemonPerPage } = useContext(PokemonContext); 

  return (
    <div className="mt-5">
      <main className="text-center d-flex flex-column align-items-center">
        <Link to="/pokemons">
          <Button
            variant="primary"
            className="btn-3d mb-3"
            onClick={() => getPokemonPerPage()}
          >
            Elige tu Pokémon
          </Button>
        </Link>
        <img src={pikachu} alt="Pokeball" style={{ width: "500px" }} />
      </main>
    </div>
  );
};
