import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import { CartContext } from "../context/CartContext";

export default function CartScreen({ navigation }) {
  const { cart, removeItem, total } = useContext(CartContext);

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image
        source={item.image}
        style={styles.imagem}
      />

      <View style={styles.info}>
        <Text style={styles.nome}>{item.name}</Text>

        <Text style={styles.quantidade}>
          Quantidade: {item.quantity}
        </Text>

        <Text style={styles.preco}>
          Unitário: R$ {item.price.toFixed(2)}
        </Text>

        <Text style={styles.subtotal}>
          Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.remover}
        onPress={() => removeItem(item.id)}
      >
        <Text style={styles.removerTexto}>
          Remover
        </Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        Meu Carrinho
      </Text>

      {cart.length === 0 ? (
        <View style={styles.vazio}>
          <Text style={styles.textoVazio}>
            Seu carrinho está vazio.
          </Text>

          <TouchableOpacity
            style={styles.botao}
            onPress={() =>
              navigation.navigate("Produtos")
            }
          >
            <Text style={styles.botaoTexto}>
              Ver Produtos
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          <View style={styles.rodape}>
            <Text style={styles.resumo}>
              Resumo do Pedido
            </Text>

            <Text style={styles.itens}>
              Itens: {totalItems}
            </Text>

            <Text style={styles.total}>
              Total: R$ {total.toFixed(2)}
            </Text>

            <TouchableOpacity
              style={styles.botao}
              onPress={() =>
                navigation.navigate("Checkout")
              }
            >
              <Text style={styles.botaoTexto}>
                Finalizar Pedido
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
    padding: 16,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 20,
  },

  vazio: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textoVazio: {
    fontSize: 18,
    color: "#666",
    marginBottom: 20,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 12,
    marginBottom: 15,
    alignItems: "center",

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  imagem: {
    width: 80,
    height: 80,
    borderRadius: 10,
    resizeMode: "cover",
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  nome: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 4,
  },

  quantidade: {
    color: "#555",
    marginBottom: 2,
  },

  preco: {
    color: "#FF9800",
    fontWeight: "bold",
    marginTop: 4,
  },

  subtotal: {
    color: "#444",
    fontWeight: "600",
    marginTop: 3,
  },

  remover: {
    backgroundColor: "#E53935",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },

  removerTexto: {
    color: "#FFF",
    fontWeight: "bold",
  },

  rodape: {
    borderTopWidth: 1,
    borderColor: "#DDD",
    paddingTop: 20,
  },

  resumo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 10,
  },

  itens: {
    fontSize: 16,
    color: "#555",
    marginBottom: 6,
  },

  total: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 20,
  },

  botao: {
    backgroundColor: "#FF9800",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});