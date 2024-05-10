import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import ProductDetails from "./Pages/ProductDetails";
import ViewDetail from "./Pages/ViewDetail";
import DeviceBinding from "./Pages/DeviceBinding";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ProductDetails}
          options={{ title: "Product Details" }}
        />
        <Stack.Screen
          name="viewDetail"
          component={ViewDetail}
          options={{ title: "View Details" }}
        />
        <Stack.Screen
          name="device"
          component={DeviceBinding}
          options={{ title: "Device Binding" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
