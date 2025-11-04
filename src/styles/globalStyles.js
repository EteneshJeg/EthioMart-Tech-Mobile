import { COLORS } from "../constants/colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  // Utility Styles
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  // Text Styles
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.textPrimary,
    paddingHorizontal: 15,
    paddingTop: 10,
    paddingBottom: 5,
  },

  // Button Styles (General Orange Button)
  primaryButton: {
    backgroundColor: COLORS.primary,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  primaryButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },

  // Card/Shadow Style (for products/companies)
  cardShadow: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    elevation: 4, // Android shadow
    shadowColor: COLORS.textPrimary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
});
