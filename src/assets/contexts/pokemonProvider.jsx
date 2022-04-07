import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/pokemon",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    timeout: 10000,
  });

  const getPokemonsList = async () => {
    let pokemonArray = [];
    for (let i = 1; i < 401; i++) {
      pokemonArray.push(await getPokemonsById(i));
    }
    setLoading(true);
    setPokemons(pokemonArray);
    setLoading(false);
  };

  const getPokemonsById = async (id) => {
    try {
      const res = await api.get(`/${id}`);
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      getPokemonsList();
    };
    getData();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        pokemons,
        loading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);

  if (context === undefined) {
    throw new Error("usePokemon must be used within a PokemonProvider");
  }

  return context;
};
