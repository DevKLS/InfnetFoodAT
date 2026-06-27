import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function CategoryCard({ item, onPress }) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Image
        source={item.image}
        style={styles.image}
      />

      <Text style={styles.title}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 120,
    backgroundColor: "#FFF",
    marginRight: 15,
    borderRadius: 15,
    padding: 10,
    alignItems: "center",

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginBottom: 10,
  },

  title: {
    fontWeight: "bold",
    color: "#1565C0",
  },
});