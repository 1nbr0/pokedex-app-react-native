import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
// import { Link } from "react-router-dom";
// import './Pokemon.css'
import { colors } from "../colors";

export const PokemonCardInfo = ({ id, name, type }) => {
  const color = colors[type];

  return (
    <View style={{ ...styles.card, backgroundColor: `${color}` }}>
      {/* <Link to={`/pokemon/${id}`}> */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`,
          }}
        />
      </View>
      <View>
        <Text style={styles.id}>#{id.toString().padStart(3, "0")}</Text>
        <Text style={styles.title}>{name}</Text>
        <Text>
          Type: <Text>{type}</Text>{" "}
        </Text>
      </View>
      {/* </Link> */}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 12,
    padding: 10,
    flexDirection: "row",
    borderRadius: 10,
  },
  id: {
    fontSize: 12,
    color: "rgba(23, 23, 27, 0.6)",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "black",
  },
  imageContainer: {
    position: "absolute",
    top: 0,
    right: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
});
