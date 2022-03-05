import { Layout } from "./src/components/Layout";
import { StyleSheet, Text } from "react-native";
import { Header } from "./src/components/Header";

export default function App() {
  return (
    <Layout>
      <Header />
      <Text>Pokedex App, ici la vue App.js</Text>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
