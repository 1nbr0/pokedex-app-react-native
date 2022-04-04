import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokemonDetailsScreen } from "../screens/PokemonDetailsScreen";
import { PokemonsScreen } from "../screens/PokemonsScreen";
import { ROUTES } from "./routes";

const Stack = createNativeStackNavigator();

export const PokemonNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={ROUTES.POKEDEX}
        component={PokemonsScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name={ROUTES.POKEMON} component={PokemonDetailsScreen} />
    </Stack.Navigator>
  );
};
