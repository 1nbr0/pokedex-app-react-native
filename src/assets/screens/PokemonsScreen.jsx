import React from "react";
import { View, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import { PokemonCardInfo } from "../../components/PokemonCardInfo";
import { usePokemon } from "../contexts/pokemonProvider";

export const PokemonsScreen = () => {
  const { pokemons, loading } = usePokemon();

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="red" />
      </View>
    );
  }
  return (
    <View>
      <View style={styles.containerCard}>
        <FlatList
          keyExtractor={(item) => item.data.id}
          showsVerticalScrollIndicator={false}
          data={pokemons}
          renderItem={({ item }) => (
            <PokemonCardInfo
              pokemon={item}
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
