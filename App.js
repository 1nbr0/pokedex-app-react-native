import { Layout } from "./src/components/Layout";
import { Text } from "react-native";
import { Header } from "./src/components/Header";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout>
        <Header />
        <Text>Pokedex App, ici la vue App.js</Text>
      </Layout>
    </ApplicationProvider>
  );
}
