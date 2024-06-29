import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { TailwindProvider } from "tailwindcss-react-native";
import Basket from "./screens/Basket";
import HomeScreen from "./screens/HomeScreen";
import InforRestaurant from "./screens/InforRestaurant";
import { store } from "./store";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Provider store={store}>
        <TailwindProvider>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={InforRestaurant} />
            <Stack.Screen
              name="Basket"
              component={Basket}
              options={{ presentation: "modal", headerShown: "false" }}
            />
          </Stack.Navigator>
        </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}
