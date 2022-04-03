import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  FlatList,
} from "react-native";
import { PokemonCardInfo } from "./PokemonCardInfo";

export const PokemonsScreen = () => {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    timeout: 10000,
  });

  const getPokemonsList = async () => {
    let pokemonArray = [];
    for (let i = 1; i < 152; i++) {
      pokemonArray.push(await getPokemonsById(i));
    }
    setLoading(true);
    setPokemons(pokemonArray);
    setLoading(false);
  };

  const getPokemonsById = async (id) => {
    try {
      const res = await api.get(`/pokemon/${id}`);
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

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }

  return (
    <View>
      <Text>Ici la vue des cartes pokemons</Text>
      <View style={styles.containerCard}>
        <FlatList
          keyExtractor={(item) => item.data.id}
          showsVerticalScrollIndicator={false}
          data={pokemons}
          renderItem={({ item }) => (
            <PokemonCardInfo
              id={item.data.id}
              name={item.data.name}
              type={item.data.types[0].type.name}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerCard: {
    padding: 20,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
