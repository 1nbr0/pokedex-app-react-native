import React from "react";
import { View, ActivityIndicator, StyleSheet, FlatList } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { PokemonCardInfo } from "../../components/PokemonCardInfo";
import { usePokemon } from "../contexts/pokemonProvider";

export const PokemonsScreen = () => {
  const { pokemons, loading } = usePokemon();

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color="#88071c" />
      </View>
    );
  }
  return (
    <View>
      <View style={styles.containerCard}>
        <FlatList
          keyExtractor={(item) => item.data.id}
          onEndReachedThreshold={0.5}
          onEndReached={() => {
            console.log("onEndReached");
          }}
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
    paddingVertical: 20,
  },
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
