import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function RestaurantDetailsScreen({ route }) {
  const { restaurante } = route.params;

  function abrirMapa() {
    const endereco = encodeURIComponent(restaurante.endereco);
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${endereco}`
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <Text style={styles.titulo}>{restaurante.nome}</Text>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Categoria</Text>
            <Text style={styles.valor}>
              {restaurante.categoria}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Endereço</Text>
            <Text style={styles.valor}>
              {restaurante.endereco}
            </Text>
          </View>

          <TouchableOpacity
            style={styles.mapButton}
            onPress={abrirMapa}
          >
            <Ionicons
              name="map-outline"
              size={20}
              color="#FFF"
            />
            <Text style={styles.mapButtonText}>
              Abrir no mapa
            </Text>
          </TouchableOpacity>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Avaliação</Text>

            <View style={styles.ratingContainer}>
              <Ionicons name="star" size={18} color="#FFC107" />
              <Ionicons name="star" size={18} color="#FFC107" />
              <Ionicons name="star" size={18} color="#FFC107" />
              <Ionicons name="star" size={18} color="#FFC107" />
              <Ionicons
                name="star-half"
                size={18}
                color="#FFC107"
              />

              <Text style={styles.ratingText}>
                {restaurante.rating}
              </Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>
              Tempo médio de entrega
            </Text>

            <Text style={styles.valor}>
              {restaurante.deliveryTime}
            </Text>
          </View>

          <View style={styles.infoContainer}>
            <Text style={styles.label}>Frete</Text>
            <Text style={styles.valor}>
              {restaurante.deliveryFee}
            </Text>
          </View>

          <Text style={styles.descricaoTitulo}>
            Sobre o restaurante
          </Text>

          <Text style={styles.descricao}>
            Restaurante parceiro do InfnetFood localizado no Centro
            do Rio de Janeiro. Oferece pratos preparados com
            ingredientes selecionados, atendimento rápido e entrega
            para usuários da região.
          </Text>

          <Text style={styles.descricaoTitulo}>
            Exemplo de item do cardápio
          </Text>

          <View style={styles.menuCard}>
            <Image
              source={restaurante.menuItem.image}
              style={styles.menuImage}
            />

            <View style={styles.menuInfo}>
              <Text style={styles.menuName}>
                {restaurante.menuItem.nome}
              </Text>

              <Text style={styles.menuPrice}>
                R$ {restaurante.menuItem.preco.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
    padding: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 20,
  },

  infoContainer: {
    marginBottom: 15,
  },

  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1565C0",
  },

  valor: {
    fontSize: 17,
    color: "#333",
    marginTop: 4,
    lineHeight: 24,
  },

  mapButton: {
    backgroundColor: "#FF9800",
    padding: 13,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  mapButtonText: {
    color: "#FFF",
    fontWeight: "bold",
    marginLeft: 8,
    fontSize: 16,
  },

  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },

  ratingText: {
    marginLeft: 8,
    fontSize: 17,
    color: "#333",
    fontWeight: "600",
  },

  descricaoTitulo: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
  },

  descricao: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
  },

  menuCard: {
    backgroundColor: "#EEF6FF",
    borderRadius: 15,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  menuImage: {
    width: 95,
    height: 95,
    borderRadius: 12,
    resizeMode: "cover",
  },

  menuInfo: {
    flex: 1,
    marginLeft: 15,
  },

  menuName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
  },

  menuPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FF9800",
  },
});