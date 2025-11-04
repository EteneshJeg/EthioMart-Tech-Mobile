import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

const placeholderImage = require("../../assets/images/cosmo1.jpg");

const ProductCard = ({ product, onPress }) => {
  const { title, description, priceRange, company, imageUri, views, location } =
    product;

  const formatPriceForDisplay = (range) => {
    const match = range.match(/\d+(?:,\d{3})*(?:\.\d+)?/);
    if (match) {
      return `ETB ${match[0].replace(/,/g, "")}`;
    }
    return "Price Listed";
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={[globalStyles.cardShadow, styles.card]}>
        {/* Product Image */}
        <Image
          source={imageUri ? { uri: imageUri } : placeholderImage}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.content}>
          <Text style={styles.priceNew}>
            {formatPriceForDisplay(priceRange)}
          </Text>

          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <View style={styles.locationContainer}>
            <Feather
              name="map-pin"
              size={12}
              color={COLORS.textSecondary}
              style={styles.locationIcon}
            />
            <Text style={styles.locationText} numberOfLines={1}>
              {location || "Worldwide"}
            </Text>
          </View>
          <TouchableOpacity onPress={onPress} style={styles.detailButton}>
            <Text style={styles.detailText}>Show Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
    maxWidth: "50%",
  },
  card: {
    overflow: "hidden",
    width: "100%",
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: 15,
  },
  priceNew: {
    fontSize: 20,
    fontWeight: "900",
    color: COLORS.primaryDark,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 5,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  locationIcon: {
    marginRight: 4,
  },
  locationText: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: "500",
    flexShrink: 1,
  },
  detailButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 5,
  },
  detailText: {
    color: COLORS.white,
    fontWeight: "600",
    fontSize: 16,
  },
  promotedTag: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: COLORS.primaryDark,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    zIndex: 10,
    transform: [{ rotate: "5deg" }],
  },
  promotedText: {
    color: COLORS.white,
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ProductCard;
