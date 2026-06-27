import React, { useContext } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Switch,
  StyleSheet,
} from "react-native";

import { ThemeContext } from "../context/ThemeContext";

export default function SettingsScreen() {
  const { dark, setDark } =
    useContext(ThemeContext);

  return (
    <SafeAreaView
      style={[
        styles.container,
        dark && styles.containerDark,
      ]}
    >
      <Text
        style={[
          styles.titulo,
          dark && styles.textDark,
        ]}
      >
        Configurações
      </Text>

      <View
        style={[
          styles.card,
          dark && styles.cardDark,
        ]}
      >
        <View>
          <Text
            style={[
              styles.texto,
              dark && styles.textDark,
            ]}
          >
            Modo Escuro
          </Text>

          <Text
            style={[
              styles.descricao,
              dark && styles.descriptionDark,
            ]}
          >
            Altere a aparência do aplicativo.
          </Text>
        </View>

        <Switch
          value={dark}
          onValueChange={setDark}
          trackColor={{
            false: "#CCC",
            true: "#1565C0",
          }}
          thumbColor="#FFF"
        />
      </View>

      <View
        style={[
          styles.infoCard,
          dark && styles.cardDark,
        ]}
      >
        <Text
          style={[
            styles.infoTitle,
            dark && styles.textDark,
          ]}
        >
          InfnetFood
        </Text>

        <Text
          style={[
            styles.infoText,
            dark && styles.descriptionDark,
          ]}
        >
          Versão 1.0.0
        </Text>

        <Text
          style={[
            styles.infoText,
            dark && styles.descriptionDark,
          ]}
        >
          Projeto acadêmico React Native
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF6FF",
    padding: 20,
  },

  containerDark: {
    backgroundColor: "#121212",
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  cardDark: {
    backgroundColor: "#1E1E1E",
  },

  texto: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },

  descricao: {
    marginTop: 4,
    fontSize: 14,
    color: "#666",
  },

  textDark: {
    color: "#FFF",
  },

  descriptionDark: {
    color: "#CCC",
  },

  infoCard: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
  },

  infoText: {
    fontSize: 15,
    color: "#555",
    marginBottom: 4,
  },
});