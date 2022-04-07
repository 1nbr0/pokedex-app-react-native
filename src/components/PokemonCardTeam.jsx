import React from "react";
import { View, StyleSheet, Pressable } from "react-native";

export const PokemonCardTeam = () => {
  return (
    <Pressable>
      <View style={styles.card}></View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 12,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "lightgray",
    borderRadius: 10,
    width: 160,
    height: 150,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
});
