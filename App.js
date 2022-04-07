import { Layout } from "./src/components/Layout";
import { Header } from "./src/components/Header";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { AuthProvider, useAuth } from "./src/assets/contexts/AuthProvider";
import { LoginScreen } from "./src/assets/screens/LoginScreen";

import React from "react";
import {
  StyleSheet,
  ActivityIndicator,
  View,
  Text,
  Modal,
  Pressable,
} from "react-native";
import { PokemonProvider } from "./src/assets/contexts/pokemonProvider";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/assets/navigators/TabNavigator";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <Layout>
          <NavigationContainer>
            <Root />
          </NavigationContainer>
        </Layout>
      </AuthProvider>
    </ApplicationProvider>
  );
}
const Root = () => {
  const auth = useAuth();
  const { currentUser, loading, error, cleanError } = auth;

  if (error) {
    return (
      <View>
        <Modal animationType="slide" transparent={true} visible={true}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{error}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => cleanError()}
              >
                <Text style={styles.textStyle}>EXIT</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  if (loading) {
    return (
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" color={"#88071c"} />
      </View>
    );
  }

  return currentUser !== null ? (
    <PokemonProvider>
      <Header />
      <TabNavigator />
    </PokemonProvider>
  ) : (
    <LoginScreen />
  );
};

const styles = StyleSheet.create({
  spinnerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#88071c",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
