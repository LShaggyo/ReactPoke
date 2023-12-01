import PropTypes from 'prop-types';
import { PokemonContext } from "./PokemonContext.js";
import { getAllPokemonNames, getPokemonByPage, navigatePokemonPerPage, getRandomOffset } from "../services/pokemon.js";
import { useEffect, useState } from "react";
import useCounter from "../hooks/useCounter.js";
import { useSearchParams } from "react-router-dom";
import { OFFSET } from "../helpers/constants";

export const PokemonProvider = ({ children }) => {
  const [params, setParams] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const { counter, addValue, subValue, resetValue } = useCounter(parseInt(searchParams.get("offset")) || OFFSET);
  const [pokemons, setPokemons] = useState([]);
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPokemonPerPage = async () => {
    const randomOffset = getRandomOffset();
    const { results } = await navigatePokemonPerPage(randomOffset);
    const pokemonDetails = await getPokemonByPage(results);
    return pokemonDetails;
  }

  useEffect(() => {
    setIsLoading(true);
    getPokemonPerPage().then((pokemons) => {
      setPokemons(pokemons);
      setIsLoading(false);
    });
    setParams({ offset: counter });
  }, [counter]);

  useEffect(() => {
    setIsLoading(true);
    getAllPokemonNames()
      .then(({ results }) => {
        results = results.map((item) => ({
          ...item,
          id: crypto.randomUUID(),
        }));
        setPokemonList(results);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        isLoading,
        pokemons,
        params,
        setParams,
        setSearchParams,
        pokemonList,
        resetValue,
        addValue,
        subValue,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

PokemonProvider.propTypes = {
  children: PropTypes.array.isRequired,
};
