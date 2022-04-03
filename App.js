import { Layout } from "./src/components/Layout";
// import { Text } from "react-native";
import { Header } from "./src/components/Header";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { PokemonsScreen } from "./src/assets/screens/PokemonsScreen";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout>
        <Header />
        <PokemonsScreen />
      </Layout>
    </ApplicationProvider>
  );
}
