import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function ProductCard({
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
          {item.name}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>

        <Text style={styles.price}>
          R$ {item.price.toFixed(2)}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 15,
    marginBottom: 15,
    overflow: "hidden",

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
    width: 110,
    height: 110,
  },

  info: {
    flex: 1,
    padding: 15,
    justifyContent: "space-between",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
  },

  description: {
    color: "#666",
    marginVertical: 6,
  },

  price: {
    color: "#FF9800",
    fontWeight: "bold",
    fontSize: 18,
  },

});