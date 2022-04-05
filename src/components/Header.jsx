import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import {
  Avatar,
  Text,
  TopNavigation,
  TopNavigationAction,
  MenuItem,
  OverflowMenu,
} from "@ui-kitten/components";
import PokedexLogo from "../icons/PokedexLogo";
import { MaterialIcons, Feather } from "@expo/vector-icons";

const MenuIcon = () => <Feather name="more-vertical" size={24} color="white" />;

const LogoutIcon = () => (
  <MaterialIcons name="logout" size={20} color="black" />
);

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const renderMenuAction = () => (
    <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
  );

  const renderOverflowMenuAction = () => (
    <React.Fragment>
      <OverflowMenu
        anchor={renderMenuAction}
        visible={menuVisible}
        backdropStyle={styles.backdrop}
        onBackdropPress={toggleMenu}
      >
        <MenuItem accessoryLeft={LogoutIcon} title="Logout" />
      </OverflowMenu>
    </React.Fragment>
  );

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Avatar style={styles.logo} ImageComponent={PokedexLogo} />
      <Text style={styles.light}>Pokedex</Text>
    </View>
  );

  return (
    <TopNavigation
      title={renderTitle}
      accessoryRight={renderOverflowMenuAction}
      style={styles.header}
    />
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  logo: {
    marginHorizontal: 16,
  },
  header: {
    backgroundColor: "#88071c",
  },
  light: {
    color: "white",
    fontWeight: "bold",
    fontSize: 26,
  },
});
