import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PokemonNavigator } from "./PokemonNavigator";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#88071c",
        tabBarLabelStyle: {
          fontSize: 10,
        },
      })}
    >
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="pokeball" color={color} size={size} />
          ),
        }}
        name={ROUTES.POKEDEX}
        component={PokemonNavigator}
      />
    </Tab.Navigator>
  );
};
