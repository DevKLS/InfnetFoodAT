import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const COLORS = {
  primary: "#1565C0",
  background: "#EEF6FF",
  white: "#FFFFFF",
  text: "#555",
  secondary: "#64748B",
  success: "#4CAF50",
  warning: "#FF9800",
  warningBackground: "#FFF3E0",
};

const RESTAURANTS = [
  {
    id: "1",
    nome: "Burger House Centro",
    categoria: "Hambúrguer",
    endereco: "Av. Rio Branco, 120 - Centro, Rio de Janeiro",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "Grátis",
    mapTop: 38,
    mapLeft: 45,
    menuItem: {
      nome: "X-Burger Especial",
      preco: 24.9,
      image: require("../assets/images/lanches.jpg"),
    },
  },
  {
    id: "2",
    nome: "Pizza Prime Carioca",
    categoria: "Pizzaria",
    endereco: "Rua da Carioca, 45 - Centro, Rio de Janeiro",
    rating: 4.6,
    deliveryTime: "40-50 min",
    deliveryFee: "R$ 4,99",
    mapTop: 70,
    mapLeft: 120,
    menuItem: {
      nome: "Pizza Calabresa",
      preco: 42.9,
      image: require("../assets/images/pizza-calabresa.jpg"),
    },
  },
  {
    id: "3",
    nome: "Doce Sabor Centro",
    categoria: "Sobremesas",
    endereco: "Rua Sete de Setembro, 88 - Centro, Rio de Janeiro",
    rating: 4.9,
    deliveryTime: "15-25 min",
    deliveryFee: "R$ 2,00",
    mapTop: 95,
    mapLeft: 210,
    menuItem: {
      nome: "Brownie da Casa",
      preco: 12.9,
      image: require("../assets/images/brownie.jpg"),
    },
  },
  {
    id: "4",
    nome: "Subway Centro",
    categoria: "Lanches",
    endereco: "Av. Presidente Vargas, 300 - Centro, Rio de Janeiro",
    rating: 4.3,
    deliveryTime: "20-30 min",
    deliveryFee: "Grátis",
    mapTop: 130,
    mapLeft: 80,
    menuItem: {
      nome: "Sanduíche Natural",
      preco: 21.5,
      image: require("../assets/images/xsalada.jpg"),
    },
  },
  {
    id: "5",
    nome: "Sushibar Carioca",
    categoria: "Japonesa",
    endereco: "Rua do Ouvidor, 60 - Centro, Rio de Janeiro",
    rating: 4.7,
    deliveryTime: "45-60 min",
    deliveryFee: "R$ 7,00",
    mapTop: 150,
    mapLeft: 250,
    menuItem: {
      nome: "Combo Sushi",
      preco: 49.9,
      image: require("../assets/images/sushi.jpg"),
    },
  },
  {
    id: "6",
    nome: "Massa Bella",
    categoria: "Massas",
    endereco: "Rua México, 25 - Centro, Rio de Janeiro",
    rating: 4.5,
    deliveryTime: "35-45 min",
    deliveryFee: "R$ 5,00",
    mapTop: 185,
    mapLeft: 150,
    menuItem: {
      nome: "Espaguete à Bolonhesa",
      preco: 34.9,
      image: require("../assets/images/espaguete.jpg"),
    },
  },
  {
    id: "7",
    nome: "Bebidas Geladas RJ",
    categoria: "Bebidas",
    endereco: "Rua Primeiro de Março, 40 - Centro, Rio de Janeiro",
    rating: 4.4,
    deliveryTime: "10-20 min",
    deliveryFee: "R$ 3,00",
    mapTop: 55,
    mapLeft: 280,
    menuItem: {
      nome: "Suco Natural",
      preco: 9.9,
      image: require("../assets/images/suco.jpg"),
    },
  },
  {
    id: "8",
    nome: "Café Imperial",
    categoria: "Cafeteria",
    endereco: "Praça XV, 10 - Centro, Rio de Janeiro",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: "R$ 4,00",
    mapTop: 210,
    mapLeft: 60,
    menuItem: {
      nome: "Brownie com Café",
      preco: 18.9,
      image: require("../assets/images/brownie.jpg"),
    },
  },
  {
    id: "9",
    nome: "Lanche Rápido Cinelândia",
    categoria: "Fast Food",
    endereco: "Praça Floriano, 15 - Centro, Rio de Janeiro",
    rating: 4.2,
    deliveryTime: "15-25 min",
    deliveryFee: "Grátis",
    mapTop: 235,
    mapLeft: 190,
    menuItem: {
      nome: "X-Salada",
      preco: 22.9,
      image: require("../assets/images/xsalada.jpg"),
    },
  },
  {
    id: "10",
    nome: "Cantina Universitária",
    categoria: "Refeições",
    endereco: "Av. República do Chile, 90 - Centro, Rio de Janeiro",
    rating: 4.7,
    deliveryTime: "30-40 min",
    deliveryFee: "R$ 3,99",
    mapTop: 265,
    mapLeft: 115,
    menuItem: {
      nome: "Prato Executivo",
      preco: 29.9,
      image: require("../assets/images/espaguete.jpg"),
    },
  },
];

function RestaurantCard({ restaurant, onPress }) {
  const freeDelivery = restaurant.deliveryFee === "Grátis";

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.card}
      onPress={onPress}
    >
      <View style={styles.cardHeader}>
        <Text style={styles.restaurantName}>
          {restaurant.nome}
        </Text>

        <View style={styles.ratingBadge}>
          <Text style={styles.ratingText}>
             {restaurant.rating}
          </Text>
        </View>
      </View>

      <Text style={styles.category}>{restaurant.categoria}</Text>

      <Text style={styles.address}>{restaurant.endereco}</Text>

      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          ⏱ {restaurant.deliveryTime}
        </Text>

        <Text
          style={[
            styles.info,
            freeDelivery && styles.freeDelivery,
          ]}
        >
          • Frete: {restaurant.deliveryFee}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function RestaurantsScreen({ navigation }) {
  function renderRestaurant({ item }) {
    return (
      <RestaurantCard
        restaurant={item}
        onPress={() =>
          navigation.navigate("DetalhesRestaurante", {
            restaurante: item,
          })
        }
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={RESTAURANTS}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>
              Restaurantes no Centro do Rio
            </Text>

            <Text style={styles.subtitle}>
              Mapa simulado com 10 restaurantes parceiros.
            </Text>

            <View style={styles.mapContainer}>
              <Text style={styles.mapTitle}>
                Centro do Rio de Janeiro
              </Text>

              <View style={styles.mapStreetHorizontal} />
              <View style={styles.mapStreetVertical} />
              <View style={styles.mapStreetDiagonal} />

              {RESTAURANTS.map((restaurant) => (
                <TouchableOpacity
                  key={restaurant.id}
                  style={[
                    styles.marker,
                    {
                      top: restaurant.mapTop,
                      left: restaurant.mapLeft,
                    },
                  ]}
                  onPress={() =>
                    navigation.navigate("DetalhesRestaurante", {
                      restaurante: restaurant,
                    })
                  }
                >
                  <Text style={styles.markerText}>
                    {restaurant.id}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <Text style={styles.sectionTitle}>
              Lista de Restaurantes
            </Text>
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    paddingHorizontal: 20,
  },

  list: {
    paddingBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: COLORS.primary,
    marginTop: 20,
  },

  subtitle: {
    color: COLORS.text,
    fontSize: 15,
    marginTop: 6,
    marginBottom: 15,
  },

  mapContainer: {
    height: 320,
    backgroundColor: "#DFF2E1",
    borderRadius: 20,
    marginBottom: 22,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#B7D7B9",
  },

  mapTitle: {
    position: "absolute",
    top: 12,
    alignSelf: "center",
    backgroundColor: "#FFF",
    color: COLORS.primary,
    fontWeight: "bold",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
    zIndex: 5,
  },

  mapStreetHorizontal: {
    position: "absolute",
    top: 150,
    left: -20,
    width: 420,
    height: 35,
    backgroundColor: "#C8CDD2",
    transform: [{ rotate: "-8deg" }],
  },

  mapStreetVertical: {
    position: "absolute",
    top: -20,
    left: 165,
    width: 34,
    height: 380,
    backgroundColor: "#C8CDD2",
    transform: [{ rotate: "10deg" }],
  },

  mapStreetDiagonal: {
    position: "absolute",
    top: 80,
    left: -40,
    width: 430,
    height: 25,
    backgroundColor: "#D7DBDF",
    transform: [{ rotate: "28deg" }],
  },

  marker: {
    position: "absolute",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#FF9800",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#FFF",
    zIndex: 10,
  },

  markerText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 13,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 15,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 4,
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  restaurantName: {
    fontSize: 20,
    fontWeight: "700",
    color: COLORS.primary,
    flex: 1,
  },

  ratingBadge: {
    backgroundColor: COLORS.warningBackground,
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  ratingText: {
    color: COLORS.warning,
    fontWeight: "700",
  },

  category: {
    marginTop: 6,
    fontSize: 15,
    color: COLORS.secondary,
  },

  address: {
    marginTop: 8,
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 20,
  },

  infoContainer: {
    flexDirection: "row",
    marginTop: 14,
    flexWrap: "wrap",
  },

  info: {
    marginRight: 16,
    color: COLORS.text,
    fontWeight: "500",
  },

  freeDelivery: {
    color: COLORS.success,
    fontWeight: "700",
  },
});