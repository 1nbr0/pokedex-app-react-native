import { StyleSheet, View } from "react-native";
import PokedexLogo from "../icons/PokedexLogo";

export const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <PokedexLogo />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    paddingTop: 10,
    paddingLeft: 15,
  },
});
