import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./src/dashboard";
import HomeScreen from "./src/login/login";
import { PaperProvider } from "react-native-paper";

const Stack = createNativeStackNavigator();

const Stacks = [
  { name: "Home", component: HomeScreen },
  { name: "Dashboard", component: DashboardScreen },
];

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {Stacks.map(({ name, component }) => (
            <Stack.Screen
              key={name}
              name={name}
              component={component}
              options={{ headerShown: false }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

export default App;
