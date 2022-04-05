import React from "react";
import { Tags } from "../../components/Tags";
import { useRoute } from "@react-navigation/native";
import { backgroundColors, colors } from "../../assets/colors";
import { Text, StyleSheet, View, Image, SafeAreaView } from "react-native";

export const PokemonDetailsScreen = () => {
  const route = useRoute();
  const id = route.params.pokemon.data.id;
  const name = route.params.pokemon.data.name;
  const weight = route.params.pokemon.data.weight;
  const height = route.params.pokemon.data.height;
  const move = route.params.pokemon.data.moves[0].move.name.toString();
  const type = route.params.pokemon.data.types[0].type.name;
  const hp = route.params.pokemon.data.stats[0].base_stat;
  const attack = route.params.pokemon.data.stats[1].base_stat;
  const defense = route.params.pokemon.data.stats[2].base_stat;
  const specialAttack = route.params.pokemon.data.stats[3].base_stat;
  const specialDefense = route.params.pokemon.data.stats[4].base_stat;
  const speed = route.params.pokemon.data.stats[5].base_stat;
  const backgroundColor = backgroundColors[type];
  const color = colors[type];

  const StatLine = ({ number: number, color: string }) => {
    return (
      <View
        style={{
          width: number,
          marginVertical: 6,
          height: 5,
          marginLeft: 10,
          borderRadius: 5,
          backgroundColor: color,
        }}
      />
    );
  };

  return (
    <>
      <Image
        style={styles.pokeballBackground}
        source={require("../images/pokeball.png")}
      />
      <SafeAreaView
        style={{
          ...styles.containerDetailsPokemon,
          backgroundColor: `${backgroundColor}`,
        }}
      >
        <View style={styles.whiteSheet} />
        <View style={styles.row}>
          <Text style={styles.pokemonName}>{name}</Text>
          <Text
            style={[
              styles.pokemonName,
              { textAlign: "right", marginRight: 20, fontSize: 25 },
            ]}
          >
            #{id.toString().padStart(3, "0")}
          </Text>
        </View>
        <View style={styles.row}>
          <Image
            style={styles.pokemonImage}
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`,
            }}
          />
        </View>
        {/* Pokemon type */}
        <View style={styles.pokemonTypeContainer}>
          <Tags type={type} />
        </View>
        {/* Pokemon About */}
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
              color: color,
            }}
          >
            About
          </Text>
          <View
            style={[styles.row, { justifyContent: "center", marginTop: 20 }]}
          >
            <View style={{ alignItems: "center", marginHorizontal: 10 }}>
              <Text>
                ⚖️ {weight?.toString().slice(0, weight.toString().length - 1)}.
                {weight
                  ?.toString()
                  .slice(
                    weight.toString().length - 1,
                    weight.toString().length
                  )}{" "}
                kg
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Weight
              </Text>
            </View>
            <View style={{ alignItems: "center", marginHorizontal: 10 }}>
              <Text>
                📏 {height?.toString().slice(0, height.toString().length - 1)}.
                {height
                  ?.toString()
                  .slice(
                    height.toString().length - 1,
                    height.toString().length
                  )}{" "}
                m
              </Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Height
              </Text>
            </View>
            <View style={{ alignItems: "center", marginHorizontal: 10 }}>
              <Text>{move}</Text>
              <Text
                style={{
                  color: "gray",
                  fontSize: 12,
                  marginTop: 10,
                }}
              >
                Move
              </Text>
            </View>
          </View>
        </View>
        {/* Pokemon Abilities */}
        <View>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              marginTop: 20,
              color: color,
            }}
          >
            Base Stats
          </Text>
          <View
            style={[
              styles.row,
              {
                justifyContent: "flex-start",
                marginHorizontal: 40,
                marginTop: 20,
              },
            ]}
          >
            <View style={{ alignItems: "flex-end", marginRight: 10 }}>
              <Text>HP</Text>
              <Text>Attack</Text>
              <Text>Defense</Text>
              <Text>Special Attack</Text>
              <Text>Special Defence</Text>
              <Text>Speed</Text>
            </View>
            <View
              style={{
                height: 100,
                width: 2,
                backgroundColor: "lightgray",
                marginRight: 10,
              }}
            />
            <View>
              <Text>{hp} </Text>
              <Text>{attack} </Text>
              <Text>{defense}</Text>
              <Text>{specialAttack}</Text>
              <Text>{specialDefense}</Text>
              <Text>{speed}</Text>
            </View>
            <View>
              <StatLine number={hp} color={color} />
              <StatLine number={attack} color={color} />
              <StatLine number={defense} color={color} />
              <StatLine number={specialAttack} color={color} />
              <StatLine number={specialDefense} color={color} />
              <StatLine number={speed} color={color} />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerDetailsPokemon: {
    flex: 1,
    paddingTop: 50,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pokemonName: {
    paddingTop: 10,
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
    textTransform: "capitalize",
    textAlign: "left",
    marginLeft: 20,
  },
  pokeballBackground: {
    position: "absolute",
    zIndex: 1,
    right: 20,
    top: 50,
  },
  imageContainer: {
    marginVertical: 30,
    marginLeft: 60,
  },
  pokemonImage: {
    width: 200,
    height: 200,
  },
  pokemonTypeContainer: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  whiteSheet: {
    position: "absolute",
    bottom: 30,
    left: 10,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    backgroundColor: "white",
    width: "95%",
    height: "61%",
  },
});
