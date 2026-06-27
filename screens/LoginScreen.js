import React, { useState } from "react";
import {
  SafeAreaView,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

import { useAuth } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (!email.trim() || !senha.trim()) {
      Alert.alert("Atenção", "Preencha e-mail e senha.");
      return;
    }

    const emailValido = /\S+@\S+\.\S+/;

    if (!emailValido.test(email)) {
      Alert.alert("E-mail inválido", "Digite um e-mail válido.");
      return;
    }

    const sucesso = login(email, senha);

    if (sucesso) {
      navigation.replace("Home");
    } else {
      Alert.alert("Erro", "Não foi possível realizar o login.");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.card}>
            <Image
              source={require("../assets/images/logo.png")}
              style={styles.logo}
            />

            <Text style={styles.titulo}>InfnetFood</Text>

            <Text style={styles.subtitulo}>
              Faça login para continuar
            </Text>

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TouchableOpacity
              style={styles.botao}
              activeOpacity={0.8}
              onPress={entrar}
            >
              <Text style={styles.botaoTexto}>Entrar</Text>
            </TouchableOpacity>

            <View style={styles.admin}>
              <Text style={styles.adminTitulo}>Usuário de teste</Text>
              <Text style={styles.adminTexto}>E-mail: admin@admin.com</Text>
              <Text style={styles.adminTexto}>Senha: admin123</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
  },

  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },

  card: {
    backgroundColor: "#FFF",
    borderRadius: 25,
    padding: 30,
    elevation: 8,

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 15,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#1565C0",
    textAlign: "center",
  },

  subtitulo: {
    textAlign: "center",
    color: "#666",
    marginTop: 8,
    marginBottom: 25,
    fontSize: 16,
  },

  input: {
    backgroundColor: "#F7F7F7",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  botao: {
    backgroundColor: "#FF9800",
    padding: 16,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 5,
  },

  botaoTexto: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 18,
  },

  admin: {
    marginTop: 30,
    backgroundColor: "#EEF6FF",
    padding: 15,
    borderRadius: 15,
  },

  adminTitulo: {
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
  },

  adminTexto: {
    color: "#555",
    marginBottom: 2,
  },
});