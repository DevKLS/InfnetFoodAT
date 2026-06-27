import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";
import { CartProvider } from "./context/CartContext";
import { OrdersProvider } from "./context/OrdersContext";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ProductsScreen from "./screens/ProductsScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import CartScreen from "./screens/CartScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrdersScreen from "./screens/OrdersScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SettingsScreen from "./screens/SettingsScreen";
import RestaurantsScreen from "./screens/RestaurantsScreen";
import RestaurantDetailsScreen from "./screens/RestaurantDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <CartProvider>
          <OrdersProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Produtos" component={ProductsScreen} />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
                <Stack.Screen name="Carrinho" component={CartScreen} />
                <Stack.Screen name="Checkout" component={CheckoutScreen} />
                <Stack.Screen name="Pedidos" component={OrdersScreen} />
                <Stack.Screen name="Perfil" component={ProfileScreen} />
                <Stack.Screen name="Configuracoes" component={SettingsScreen} />
                <Stack.Screen name="Restaurantes" component={RestaurantsScreen} />
                <Stack.Screen name="DetalhesRestaurante" component={RestaurantDetailsScreen} />
              </Stack.Navigator>
            </NavigationContainer>
          </OrdersProvider>
        </CartProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}