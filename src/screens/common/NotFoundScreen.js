import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

const NotFoundScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="alert-circle-outline"
        size={80}
        color={COLORS.primaryDark}
      />
      <Text style={styles.title}>404 - Not Found</Text>
      <Text style={styles.message}>
        Oops! The page or resource you are looking for does not exist.
      </Text>

      <TouchableOpacity
        style={globalStyles.primaryButton}
        onPress={() => navigation.navigate("HomeFeed")}
      >
        <Text style={globalStyles.primaryButtonText}>Go to Home Feed</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginTop: 20,
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: COLORS.textSecondary,
    textAlign: "center",
    marginBottom: 40,
    paddingHorizontal: 20,
  },
});

export default NotFoundScreen;
