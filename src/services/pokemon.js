import { SERVICE_URL } from "../helpers/constants";

export const getAllPokemonNames = async () => {
  const response = await fetch(`${SERVICE_URL}?offset=0&limit=1292`);
  if (!response.ok) throw new Error('Error al obtener lista de nombres pokemon.');
  return await response.json();
}

export const getPokemonByName = async (name) => {
  const response = await fetch(`${SERVICE_URL}${name}`);
  if (!response.ok) throw new Error('Error al obtener datos de pokemon por nombre');
  return await response.json();
}

export const getPokemonByPage = async (results) => {
  const promises = results.map(async (item) => {
    const response = await fetch(`${SERVICE_URL}${item.name}`);
    if (!response.ok) throw new Error('Error al obtener arreglo de pokemon por página');
    return await response.json();
  });
  return await Promise.all(promises);
}

export const navigatePokemonPerPage = async (offset = 0, limit = 20) => {
  const response = await fetch(`${SERVICE_URL}?offset=${offset}&limit=${limit}`);
  if (!response.ok) throw new Error('Error al obtener lista de nombres pokemon.');
  return await response.json();
}

export const getRandomOffset = () => {
  const maxOffset = 1000; 
  return Math.floor(Math.random() * maxOffset);
};
