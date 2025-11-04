import { StyleSheet, TextInput, View } from "react-native";

import { COLORS } from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import React from "react";

const SearchBar = ({ onSearch, value }) => {
  return (
    <View style={styles.container}>
      <Feather
        name="search"
        size={20}
        color={COLORS.textSecondary}
        style={styles.icon}
      />
      <TextInput
        style={styles.input}
        placeholder="Search products, companies, or categories..."
        placeholderTextColor={COLORS.textSecondary}
        value={value}
        onChangeText={onSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
});

export default SearchBar;
