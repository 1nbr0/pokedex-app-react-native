import { Layout } from "./src/components/Layout";
import { Header } from "./src/components/Header";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { PokemonProvider } from "./src/assets/contexts/pokemonProvider";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/assets/navigators/TabNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <PokemonProvider>
          <Layout>
            <Header />
            <TabNavigator />
          </Layout>
        </PokemonProvider>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
