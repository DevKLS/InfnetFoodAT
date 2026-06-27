import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ProductCard from "../components/ProductCard";
import products from "../data/products";

const COLORS = {
  primary: "#1565C0",
  background: "#EEF6FF",
  text: "#555",
};

export default function ProductsScreen({
  navigation,
  route,
}) {
  const categoria = route?.params?.categoria;

  const lista = categoria
    ? products.filter(
        (item) =>
          item.category === categoria.name
      )
    : products;

  function renderProduct({ item }) {
    return (
      <ProductCard
        item={item}
        onPress={() =>
          navigation.navigate(
            "ProductDetails",
            {
              produto: item,
            }
          )
        }
      />
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        {categoria
          ? categoria.name
          : "Todos os Produtos"}
      </Text>

      <FlatList
        data={lista}
        renderItem={renderProduct}
        keyExtractor={(item) =>
          item.id.toString()
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={
          styles.listContent
        }
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            Nenhum produto encontrado nesta
            categoria.
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 20,
  },

  listContent: {
    paddingBottom: 20,
  },

  separator: {
    height: 12,
  },

  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: COLORS.text,
    marginTop: 40,
  },
});