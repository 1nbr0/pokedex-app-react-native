import { Layout } from "./src/components/Layout";
import { StyleSheet, Text } from "react-native";

export default function App() {
  return (
    <Layout>
      <Text>Open up App.js to start working on your app!</Text>
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
