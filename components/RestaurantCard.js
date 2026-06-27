import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function RestaurantCard({
  item,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Image
        source={item.image}
        style={styles.image}
      />

      <View style={styles.info}>
        <Text style={styles.name}>
          {item.nome}
        </Text>

        <Text style={styles.category}>
          {item.categoria}
        </Text>

        <Text style={styles.delivery}>
          Entrega • {item.delivery}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 20,

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  image: {
    width: "100%",
    height: 180,
  },

  info: {
    padding: 15,
  },

  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#1565C0",
  },

  category: {
    color: "#666",
    marginTop: 4,
  },

  delivery: {
    marginTop: 8,
    color: "#FF9800",
    fontWeight: "bold",
  },
});