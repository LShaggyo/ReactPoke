import PropTypes from 'prop-types';
import {Button, Card} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import {PokemonContext} from "../context/PokemonContext.js";

export const PokemonShow = ({pokemon}) => {
  const {isLoading} = useContext(PokemonContext);

  const navigate = useNavigate();

  const navigateToPokemonDetails = (pokemonName) => {
    navigate(`/pokemons/${pokemonName}`);
  }

  return (
    <>
      {
        isLoading ? "" : <Card style={{width: '15rem'}} className="my-2 text-center">
          <Card.Img className="img-card-show" variant="top" src={
            pokemon["sprites"]["other"]["dream_world"]["front_default"]
            || pokemon["sprites"]["other"]["home"]["front_default"]
            || pokemon["sprites"]["front_default"]
          }/>
          <Card.Body>
            <Card.Title>{pokemon.name.toUpperCase()}</Card.Title>
            <Button
              onClick={() => navigateToPokemonDetails(pokemon.name)}
              variant="primary"
              className="w-100"
            >
              <i className="bi bi-eye"></i> Ver detalles
            </Button>
          </Card.Body>
        </Card>
      }
    </>
);
};

PokemonShow.propTypes = {
  pokemon: PropTypes.object
};
