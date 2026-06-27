import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";

import { AuthContext } from "../context/AuthContext";

export default function ProfileScreen({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  function handleLogout() {
    Alert.alert(
      "Sair",
      "Deseja realmente sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          style: "destructive",
          onPress: logout,
        },
      ]
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>Meu Perfil</Text>

      <View style={styles.card}>
        <Image
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          }}
          style={styles.avatar}
        />

        <Text style={styles.label}>Nome</Text>
        <Text style={styles.valor}>
          {user?.nome || user?.name || "Cliente"}
        </Text>

        <Text style={styles.label}>E-mail</Text>
        <Text style={styles.valor}>
          {user?.email || "cliente@email.com"}
        </Text>

        <Text style={styles.label}>Tipo de usuário</Text>
        <Text style={styles.valor}>
          {user?.tipo || "cliente"}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botao}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Pedidos")}
      >
        <Text style={styles.botaoTexto}>Meus Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoSecundario}
        activeOpacity={0.8}
        onPress={() => navigation.navigate("Configuracoes")}
      >
        <Text style={styles.botaoSecundarioTexto}>
          Configurações
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.sair}
        activeOpacity={0.8}
        onPress={handleLogout}
      >
        <Text style={styles.sairTexto}>Sair</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
    padding: 20,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 18,
    marginBottom: 30,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  avatar: {
    width: 95,
    height: 95,
    borderRadius: 48,
    alignSelf: "center",
    marginBottom: 20,
  },

  label: {
    fontWeight: "bold",
    color: "#1565C0",
    marginTop: 10,
  },

  valor: {
    fontSize: 17,
    color: "#333",
    marginTop: 4,
  },

  botao: {
    backgroundColor: "#FF9800",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },

  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },

  botaoSecundario: {
    backgroundColor: "#1565C0",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },

  botaoSecundarioTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 17,
  },

  sair: {
    marginTop: 25,
    alignItems: "center",
  },

  sairTexto: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },
});