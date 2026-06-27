import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useOrders } from "../context/OrdersContext";

const COLORS = {
  primary: "#1565C0",
  background: "#EEF6FF",
  white: "#FFFFFF",
  text: "#555",
  warning: "#FF9800",
};

export default function OrdersScreen() {
  const { orders } = useOrders();

  function renderOrder({ item }) {
    return (
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.restaurant}>
            Pedido #{item.id}
          </Text>

          <View style={styles.statusBox}>
            <Ionicons
              name="time-outline"
              size={15}
              color="#FFF"
            />

            <Text style={styles.statusText}>
              {item.status}
            </Text>
          </View>
        </View>

        <Text style={styles.info}>
          Data: {item.createdAt}
        </Text>

        {item.items.map((product) => (
          <Text key={product.id} style={styles.product}>
            {product.quantity}x {product.name}
          </Text>
        ))}

        <Text style={styles.total}>
          Total: R$ {item.total.toFixed(2)}
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Meus Pedidos
      </Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={renderOrder}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons
              name="receipt-outline"
              size={70}
              color={COLORS.primary}
            />

            <Text style={styles.emptyTitle}>
              Nenhum pedido realizado
            </Text>

            <Text style={styles.emptyText}>
              Quando você finalizar uma compra, seu pedido aparecerá aqui.
            </Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.primary,
    marginBottom: 20,
  },

  list: {
    flexGrow: 1,
    paddingBottom: 20,
  },

  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 18,
    marginBottom: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    gap: 10,
  },

  restaurant: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  info: {
    fontSize: 15,
    color: COLORS.text,
    marginBottom: 8,
  },

  product: {
    fontSize: 15,
    color: "#333",
    marginBottom: 4,
  },

  total: {
    fontSize: 17,
    fontWeight: "bold",
    color: COLORS.primary,
    marginTop: 10,
  },

  statusBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.warning,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 5,
  },

  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },

  emptyTitle: {
    marginTop: 18,
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center",
  },

  emptyText: {
    marginTop: 10,
    textAlign: "center",
    color: COLORS.text,
    fontSize: 16,
    lineHeight: 24,
  },
});