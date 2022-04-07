import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { ROUTES } from "./routes";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { PokemonNavigator } from "./PokemonNavigator";
import { TeamScreen } from "../screens/TeamScreen";

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#000",
        tabBarActiveBackgroundColor: "#88071c",
        tabBarInactiveBackgroundColor: "#88071c",
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: "bold",
          textTransform: "uppercase",
        },
        tabBarStyle: {
          position: "absolute",
          height: 55,
          borderTopWidth: 0,
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
        name={ROUTES.HOME}
        component={PokemonNavigator}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Equipe",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="pokemon-go"
              color={color}
              size={size}
            />
          ),
        }}
        name={ROUTES.TEAM}
        component={TeamScreen}
      />
    </Tab.Navigator>
  );
};
