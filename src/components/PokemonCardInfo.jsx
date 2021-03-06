import React from "react";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { Tags } from "./Tags";
import { backgroundColors } from "../assets/colors";
import { useNavigation } from "@react-navigation/native";

export const PokemonCardInfo = ({ pokemon, id, name, type }) => {
  const backgroundColor = backgroundColors[type];
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("Pokemon", { pokemon })}>
      <View style={{ ...styles.card, backgroundColor: `${backgroundColor}` }}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
            }}
          />
        </View>
        <View>
          <Text style={styles.id}>#{id.toString().padStart(3, "0")}</Text>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.containerType}>
            <Tags type={type} />
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 12,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 10,
  },
  id: {
    fontSize: 16,
    color: "rgba(23, 23, 27, 0.6)",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
    textTransform: "capitalize",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    right: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  containerType: {
    flexDirection: "row",
  },
});
