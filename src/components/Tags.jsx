import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../assets/colors";

export const Tags = ({ type }) => {
  return (
    <View style={{ ...styles.tag, backgroundColor: colors[type] }}>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    borderRadius: 5,
    marginRight: 5,
    marginTop: 2,
    padding: 6,
  },
  type: {
    textTransform: "capitalize",
    color: "white",
  },
});
