import React, { useState, useContext } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";

import { CartContext } from "../context/CartContext";
import { useOrders } from "../context/OrdersContext";

export default function CheckoutScreen({ navigation }) {
  const { cart, total, clearCart } = useContext(CartContext);
  const { addOrder } = useOrders();

  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [metodoPagamento, setMetodoPagamento] = useState("");
  const [loading, setLoading] = useState(false);
  const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

  async function buscarCEP(valor) {
    setCep(valor);

    const cepLimpo = valor.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      setLogradouro("");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `https://viacep.com.br/ws/${cepLimpo}/json/`
      );

      const data = await response.json();

      if (data.erro) {
        setLogradouro("");
        Alert.alert("CEP não encontrado");
        return;
      }

      setLogradouro(
        `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`
      );
    } catch (error) {
      Alert.alert("Erro", "Não foi possível consultar o CEP.");
    } finally {
      setLoading(false);
    }
  }

  function processarPedido() {
    if (cart.length === 0) {
      Alert.alert(
        "Carrinho vazio",
        "Adicione produtos antes de finalizar."
      );
      navigation.navigate("Produtos");
      return;
    }

    if (
      !cep.trim() ||
      !logradouro.trim() ||
      !numero.trim() ||
      !metodoPagamento
    ) {
      Alert.alert(
        "Campos obrigatórios",
        "Preencha todos os dados para finalizar o pedido."
      );
      return;
    }

    setPedidoConfirmado(true);

    Alert.alert(
      "Pedido Confirmado",
      "Seu pedido foi enviado para preparação.",
      [
        {
          text: "OK",
          onPress: () => {
            addOrder([...cart], total);
            clearCart();
            navigation.navigate("Pedidos");
          },
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <Text style={styles.titulo}>Finalizar Pedido</Text>

        <View style={styles.card}>
          <Text style={styles.secaoTitulo}>📍 Endereço de Entrega</Text>

          <TextInput
            style={styles.input}
            placeholder="CEP"
            keyboardType="numeric"
            maxLength={8}
            value={cep}
            onChangeText={buscarCEP}
          />

          {loading && (
            <ActivityIndicator
              size="small"
              color="#1565C0"
              style={styles.loading}
            />
          )}

          <TextInput
            style={[styles.input, styles.inputDesabilitado]}
            placeholder="Endereço"
            editable={false}
            value={logradouro}
          />

          <TextInput
            style={styles.input}
            placeholder="Número"
            value={numero}
            onChangeText={setNumero}
          />
        </View>

        <View style={styles.card}>
          <Text style={styles.secaoTitulo}>Forma de Pagamento</Text>

          {["Cartão de Crédito", "Pix", "Dinheiro"].map((metodo) => (
            <TouchableOpacity
              key={metodo}
              style={[
                styles.opcao,
                metodoPagamento === metodo && styles.opcaoSelecionada,
              ]}
              onPress={() => setMetodoPagamento(metodo)}
            >
              <Text
                style={[
                  styles.opcaoTexto,
                  metodoPagamento === metodo &&
                    styles.opcaoTextoSelecionado,
                ]}
              >
                {metodo}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.resumo}>
          <Text style={styles.resumoTitulo}>Resumo do Pedido</Text>

          {cart.map((item) => (
            <View key={item.id} style={styles.itemResumo}>
              <Text style={styles.itemNome}>
                {item.quantity}x {item.name}
              </Text>

              <Text style={styles.itemPreco}>
                R$ {(item.price * item.quantity).toFixed(2)}
              </Text>
            </View>
          ))}

          <View style={styles.totalContainer}>
            <Text style={styles.resumoTexto}>Total</Text>

            <Text style={styles.resumoValor}>
              R$ {total.toFixed(2)}
            </Text>
          </View>
        </View>

        {pedidoConfirmado && (
          <View style={styles.feedback}>
            <Text style={styles.feedbackText}>
              Pedido confirmado com sucesso!
            </Text>
          </View>
        )}

        <TouchableOpacity
          style={[
            styles.botao,
            loading && styles.botaoDesabilitado,
            pedidoConfirmado && styles.botaoConfirmado,
          ]}
          disabled={loading}
          onPress={processarPedido}
        >
          <Text style={styles.botaoTexto}>
            {pedidoConfirmado ? "Pedido Confirmado" : "Confirmar Pedido"}
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  secaoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 15,
  },

  input: {
    backgroundColor: "#F7F7F7",
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    fontSize: 16,
  },

  inputDesabilitado: {
    backgroundColor: "#ECECEC",
    color: "#666",
  },

  loading: {
    marginBottom: 12,
  },

  opcao: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 10,
    padding: 14,
    marginBottom: 10,
    alignItems: "center",
  },

  opcaoSelecionada: {
    backgroundColor: "#FFF3E0",
    borderColor: "#FF9800",
  },

  opcaoTexto: {
    color: "#555",
    fontWeight: "600",
    fontSize: 16,
  },

  opcaoTextoSelecionado: {
    color: "#FF9800",
  },

  resumo: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  resumoTitulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 12,
  },

  itemResumo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  itemNome: {
    fontSize: 15,
    color: "#555",
    flex: 1,
  },

  itemPreco: {
    fontSize: 15,
    color: "#555",
    fontWeight: "600",
  },

  totalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
    paddingTop: 14,
    marginTop: 10,
  },

  resumoTexto: {
    fontSize: 18,
    fontWeight: "600",
    color: "#555",
  },

  resumoValor: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF9800",
  },

  feedback: {
    backgroundColor: "#E8F5E9",
    borderWidth: 1,
    borderColor: "#4CAF50",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },

  feedbackText: {
    color: "#2E7D32",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#FF9800",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  botaoConfirmado: {
    backgroundColor: "#4CAF50",
  },

  botaoDesabilitado: {
    opacity: 0.6,
  },

  botaoTexto: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});