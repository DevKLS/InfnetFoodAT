import { StyleSheet } from "react-native";
import Colors from "./colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 15,
  },

  subtitle: {
    fontSize: 18,
    color: Colors.textLight,
    marginBottom: 20,
  },

  input: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },

  button: {
    backgroundColor: Colors.secondary,
    padding: 16,
    borderRadius: 12,
    alignItems: "center",

    elevation: 4,

    shadowColor: Colors.shadow,
    shadowOpacity: 0.15,
    shadowRadius: 4,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    fontSize: 17,
  },

  card: {
    backgroundColor: Colors.white,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,

    elevation: 3,

    shadowColor: Colors.shadow,
    shadowOpacity: 0.12,
    shadowRadius: 4,

    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  price: {
    fontSize: 20,
    color: Colors.secondary,
    fontWeight: "bold",
  },

  image: {
    width: "100%",
    height: 200,
    borderRadius: 15,
    resizeMode: "cover",
  },
});