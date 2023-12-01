import { Col, Row } from "react-bootstrap";
import { useContext, useEffect } from "react";
import { PokemonContext } from "../context/PokemonContext.js";
import { PokemonShow } from "../components/PokemonShow.jsx";

export const PokemonList = () => {
  const { pokemons, params, setSearchParams, getPokemonPerPage } = useContext(
    PokemonContext
  );

  useEffect(() => {
    setSearchParams(params);

    const fetchData = async () => {
      try {
        await getPokemonPerPage();
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData(); // Llama a la función asíncrona
  }, [params, setSearchParams, getPokemonPerPage]);

  return (
    <div>
      <h1>Pokemones</h1>
      <hr />
      <Row>
        {pokemons.map(
          (pokemon) =>
            pokemon.id && (
              <Col key={pokemon.id}>
                <PokemonShow pokemon={pokemon} />
              </Col>
            )
        )}
      </Row>
      <hr />
    </div>
  );
};
