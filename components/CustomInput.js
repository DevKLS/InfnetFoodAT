import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function CustomInput(props) {
  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor="#777"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 15,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#DDD",
    fontSize: 16,
  },
});