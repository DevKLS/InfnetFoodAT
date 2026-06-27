import React, { useMemo, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const COLORS = {
  primary: "#1565C0",
  primaryLight: "#E3F2FD",
  background: "#EEF6FF",
  white: "#FFFFFF",
  text: "#263238",
  textLight: "#777",
  border: "#DDD",
};

const MENU_ITEMS = [
  { id: "1", title: "Perfil", screen: "Perfil", icon: "person-outline" },
  { id: "2", title: "Pedidos", screen: "Pedidos", icon: "receipt-outline" },
  { id: "3", title: "Carrinho", screen: "Carrinho", icon: "cart-outline" },
  { id: "4", title: "Rest.", screen: "Restaurantes", icon: "restaurant-outline" },
  { id: "5", title: "Config.", screen: "Configuracoes", icon: "settings-outline" },
];

const CATEGORIES = [
  {
    id: "1",
    name: "Lanches",
    image: require("../assets/images/lanches.jpg"),
  },
  {
    id: "2",
    name: "Bebidas",
    image: require("../assets/images/bebidas.jpg"),
  },
  {
    id: "3",
    name: "Sobremesas",
    image: require("../assets/images/sobremesas.jpg"),
  },
  {
    id: "4",
    name: "Pizzas",
    image: require("../assets/images/pizza-calabresa.jpg"),
  },
  {
    id: "5",
    name: "Massas",
    image: require("../assets/images/espaguete.jpg"),
  },
  {
    id: "6",
    name: "Japonesa",
    image: require("../assets/images/sushi.jpg"),
  },
];

export default function HomeScreen({ navigation }) {
  const [search, setSearch] = useState("");

  const filteredCategories = useMemo(() => {
    if (!search.trim()) {
      return CATEGORIES;
    }

    return CATEGORIES.filter((category) =>
      category.name
        .toLowerCase()
        .includes(search.trim().toLowerCase())
    );
  }, [search]);

  function navigateToCategory(category) {
    navigation.navigate("Produtos", {
      categoria: category,
    });
  }

  function renderCategory({ item }) {
    return (
      <TouchableOpacity
        style={styles.categoryCard}
        activeOpacity={0.85}
        onPress={() => navigateToCategory(item)}
      >
        <View style={styles.categoryImageBox}>
          <Image source={item.image} style={styles.categoryImage} />
        </View>

        <Text style={styles.categoryTitle}>{item.name}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.header}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />

          <Text style={styles.subtitle}>
            Seu delivery universitário
          </Text>
        </View>

        <View style={styles.quickMenu}>
          {MENU_ITEMS.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.menuButton}
              activeOpacity={0.85}
              onPress={() => navigation.navigate(item.screen)}
            >
              <View style={styles.iconCircle}>
                <Ionicons
                  name={item.icon}
                  size={22}
                  color={COLORS.primary}
                />
              </View>

              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.bannerBox}>
          <Image
            source={require("../assets/images/banner.jpg")}
            style={styles.banner}
          />

          <View style={styles.bannerOverlay}>
            <Text style={styles.bannerTitle}>
              Peça sua comida favorita
            </Text>

            <Text style={styles.bannerText}>
              Entrega rápida no campus
            </Text>
          </View>
        </View>

        <View style={styles.searchBox}>
          <Ionicons
            name="search-outline"
            size={22}
            color="#888"
          />

          <TextInput
            style={styles.searchInput}
            placeholder="Pesquisar categorias..."
            placeholderTextColor="#888"
            value={search}
            onChangeText={setSearch}
          />

          {search.length > 0 && (
            <TouchableOpacity onPress={() => setSearch("")}>
              <Ionicons
                name="close-circle"
                size={20}
                color="#999"
              />
            </TouchableOpacity>
          )}
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Categorias
          </Text>

          <Text style={styles.sectionCounter}>
            {filteredCategories.length} opções
          </Text>
        </View>

        <FlatList
          data={filteredCategories}
          renderItem={renderCategory}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={styles.separator} />
          )}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Nenhuma categoria encontrada.
            </Text>
          }
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    padding: 20,
    paddingBottom: 32,
  },

  header: {
    alignItems: "center",
    marginBottom: 22,
  },

  logo: {
    width: 320,
    height: 135,
    resizeMode: "contain",
  },

  subtitle: {
    marginTop: -8,
    fontSize: 15,
    color: COLORS.textLight,
    fontWeight: "500",
  },

  quickMenu: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  menuButton: {
    width: "18%",
    backgroundColor: COLORS.white,
    borderRadius: 18,
    paddingVertical: 11,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 7,
  },

  menuText: {
    color: COLORS.primary,
    fontWeight: "700",
    fontSize: 10,
    textAlign: "center",
  },

  bannerBox: {
    width: "100%",
    height: 180,
    borderRadius: 22,
    overflow: "hidden",
    marginBottom: 24,
    elevation: 4,
    backgroundColor: COLORS.white,
  },

  banner: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },

  bannerOverlay: {
    position: "absolute",
    left: 18,
    bottom: 18,
    backgroundColor: "rgba(0, 0, 0, 0.35)",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
  },

  bannerTitle: {
    color: COLORS.white,
    fontSize: 18,
    fontWeight: "bold",
  },

  bannerText: {
    color: COLORS.white,
    fontSize: 13,
    marginTop: 3,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 16,
    marginBottom: 28,
    elevation: 2,
  },

  searchInput: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 10,
    fontSize: 16,
    color: COLORS.text,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  sectionCounter: {
    fontSize: 13,
    color: COLORS.textLight,
    fontWeight: "600",
  },

  categoryCard: {
    width: 128,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 14,
    alignItems: "center",
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  categoryImageBox: {
    width: 82,
    height: 82,
    borderRadius: 41,
    backgroundColor: COLORS.primaryLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    overflow: "hidden",
  },

  categoryImage: {
    width: 76,
    height: 76,
    resizeMode: "cover",
    borderRadius: 38,
  },

  categoryTitle: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },

  separator: {
    width: 14,
  },

  emptyText: {
    color: COLORS.textLight,
    fontSize: 15,
    marginTop: 8,
  },
});