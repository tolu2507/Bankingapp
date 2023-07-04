import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import TabHomeScreen from "./TabHomeScreen";
import TabNotificationsScreen from "./TabNotificationsScreen";
import TabProfileScreen from "./TabProfileScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function DashboardScreen() {
  const Tabs = [
    { name: "TabHome", component: TabHomeScreen, icon: "home" },
    {
      name: "Notifications",
      component: TabNotificationsScreen,
      icon: "file-document-outline",
    },
    { name: "Profile", component: TabProfileScreen, icon: "view-grid-outline" },
  ];

  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      activeColor="#012b12"
      barStyle={{ backgroundColor: "", height: 60, padding: 0 }}
      labeled={false}
    >
      {Tabs.map(({ name, component, icon }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarLabel: { name },
            tabBarIcon: ({ color,focused }) => (
              <MaterialCommunityIcons name={icon} color={color} size={26} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
