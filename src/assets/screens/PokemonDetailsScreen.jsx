import { useRoute } from "@react-navigation/native";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

export const PokemonDetailsScreen = () => {
  const route = useRoute();

  return (
    <View style={styles.containerDetailsPokemon}>
      <Text>here pokemon details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerDetailsPokemon: {
    marginTop: 50,
  },
});
