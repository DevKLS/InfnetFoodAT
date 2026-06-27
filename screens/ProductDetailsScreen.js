import React, { useContext, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import { CartContext } from "../context/CartContext";

export default function ProductDetailsScreen({ route, navigation }) {
  const { produto } = route.params;
  const { addItem } = useContext(CartContext);

  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);

  function aumentarQuantidade() {
    setQuantidade(quantidade + 1);
  }

  function diminuirQuantidade() {
    if (quantidade > 1) {
      setQuantidade(quantidade - 1);
    }
  }

  function handleAddToCart() {
    for (let i = 0; i < quantidade; i++) {
      addItem(produto);
    }

    setAdicionado(true);

    Alert.alert(
      "Sucesso",
      `${quantidade} item(ns) adicionado(s) ao carrinho.`,
      [
        {
          text: "Continuar Comprando",
          style: "cancel",
        },
        {
          text: "Ver Carrinho",
          onPress: () => navigation.navigate("Carrinho"),
        },
      ]
    );

    setTimeout(() => {
      setAdicionado(false);
    }, 1500);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={produto.image} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.name}>{produto.name}</Text>

          <Text style={styles.category}>{produto.category}</Text>

          <Text style={styles.description}>{produto.description}</Text>

          <Text style={styles.price}>
            R$ {produto.price.toFixed(2)}
          </Text>

          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>
              Quantidade
            </Text>

            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={styles.quantityButton}
                onPress={diminuirQuantidade}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={styles.quantityText}>{quantidade}</Text>

              <TouchableOpacity
                style={styles.quantityButton}
                onPress={aumentarQuantidade}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.total}>
            Total: R$ {(produto.price * quantidade).toFixed(2)}
          </Text>

          {adicionado && (
            <View style={styles.feedback}>
              <Text style={styles.feedbackText}>
                Produto adicionado ao carrinho!
              </Text>
            </View>
          )}

          <TouchableOpacity
            style={[
              styles.button,
              adicionado && styles.buttonSuccess,
            ]}
            onPress={handleAddToCart}
          >
            <Text style={styles.buttonText}>
              {adicionado
                ? "Adicionado!"
                : "Adicionar ao Carrinho"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cartButton}
            onPress={() => navigation.navigate("Carrinho")}
          >
            <Text style={styles.cartButtonText}>
              Ir para o Carrinho
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
  },

  image: {
    width: "100%",
    height: 280,
    resizeMode: "cover",
  },

  content: {
    padding: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
  },

  category: {
    fontSize: 16,
    color: "#777",
    marginBottom: 15,
  },

  description: {
    fontSize: 16,
    color: "#555",
    lineHeight: 24,
    marginBottom: 20,
  },

  price: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FF9800",
    marginBottom: 20,
  },

  quantityContainer: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 18,
  },

  quantityTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 12,
    textAlign: "center",
  },

  quantityControls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  quantityButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#1565C0",
    alignItems: "center",
    justifyContent: "center",
  },

  quantityButtonText: {
    color: "#FFF",
    fontSize: 28,
    fontWeight: "bold",
  },

  quantityText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1565C0",
    marginHorizontal: 25,
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 20,
    textAlign: "center",
  },

  feedback: {
    backgroundColor: "#E8F5E9",
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#4CAF50",
  },

  feedbackText: {
    color: "#2E7D32",
    fontWeight: "bold",
    textAlign: "center",
  },

  button: {
    backgroundColor: "#FF9800",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },

  buttonSuccess: {
    backgroundColor: "#4CAF50",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  cartButton: {
    backgroundColor: "#1565C0",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  cartButtonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});