import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { PokemonCardTeam } from "../../components/PokemonCardTeam";

export const TeamScreen = () => {
  const pokemonInTeam = [1, 2, 3, 4, 5, 6];
  return (
    <View>
      <FlatList
        style={styles.containerCardTeam}
        showsVerticalScrollIndicator={false}
        data={pokemonInTeam}
        renderItem={(item) => <PokemonCardTeam />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerCardTeam: {
    flexDirection: "row",
  },
});
