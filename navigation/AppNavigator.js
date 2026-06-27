import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import HomeScreen from "../screens/HomeScreen";
import ProductsScreen from "../screens/ProductsScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";
import CheckoutScreen from "../screens/CheckoutScreen";
import ProfileScreen from "../screens/ProfileScreen";
import OrdersScreen from "../screens/OrdersScreen";
import RestaurantsScreen from "../screens/RestaurantsScreen";
import RestaurantDetailsScreen from "../screens/RestaurantDetailsScreen";
import SettingsScreen from "../screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#1565C0",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "InfnetFood" }}
      />

      <Stack.Screen
        name="Produtos"
        component={ProductsScreen}
        options={{ title: "Produtos" }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ title: "Detalhes do Produto" }}
      />

      <Stack.Screen
        name="Carrinho"
        component={CartScreen}
        options={{ title: "Carrinho" }}
      />

      <Stack.Screen
        name="Checkout"
        component={CheckoutScreen}
        options={{ title: "Checkout" }}
      />

      <Stack.Screen
        name="Perfil"
        component={ProfileScreen}
        options={{ title: "Perfil" }}
      />

      <Stack.Screen
        name="Pedidos"
        component={OrdersScreen}
        options={{ title: "Pedidos" }}
      />

      <Stack.Screen
        name="Restaurantes"
        component={RestaurantsScreen}
        options={{ title: "Restaurantes" }}
      />

      <Stack.Screen
        name="DetalhesRestaurante"
        component={RestaurantDetailsScreen}
        options={{ title: "Restaurante" }}
      />

      <Stack.Screen
        name="Configuracoes"
        component={SettingsScreen}
        options={{ title: "Configurações" }}
      />
    </Stack.Navigator>
  );
}