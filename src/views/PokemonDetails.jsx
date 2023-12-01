// pokemondetails.jsx
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch.js";
import { SERVICE_URL } from "../helpers/constants.js";
import { Loader } from "../components/Loader.jsx";
import { PokeCard } from "../components/PokeCard.jsx";

export const PokemonDetails = () => {
  const { pokemonName } = useParams();
  const { data, isLoading, hasError } = useFetch(`${SERVICE_URL}${pokemonName}`);
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/pokemons');
  };

  return (
    <>
      {hasError.is ? (
        <InfoMessage message="Hubo un error o el pokemón no existe." color="warning" />
      ) : isLoading ? (
        <Loader />
      ) : (
        <>
          <PokeCard pokemon={data} />
          <div className="text-center my-4">
            <Button onClick={goBack} variant="primary">
              <i className="bi bi-arrow-left"></i> Volver atrás
            </Button>
          </div>
        </>
      )}
    </>
  );
};
