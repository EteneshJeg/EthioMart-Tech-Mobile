import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { globalStyles } from "../styles/globalStyles";

const placeholderLogo = require("../../assets/icons/companylogo.jpg");

const CompanyCard = ({ company, onPress }) => {
  const { name, slogan, location, logoUri, productCount } = company;

  return (
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <View style={[globalStyles.cardShadow, styles.card]}>
        <Image
          source={logoUri ? { uri: logoUri } : placeholderLogo}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.slogan} numberOfLines={1}>
            {slogan || "No slogan provided."}
          </Text>

          <View style={styles.detailRow}>
            <Feather name="map-pin" size={14} color={COLORS.textSecondary} />
            <Text style={styles.detailText} numberOfLines={1}>
              {location}
            </Text>
          </View>
          <View style={styles.detailRow}>
            <Feather name="box" size={14} color={COLORS.textSecondary} />
            <Text style={styles.detailText}>
              {productCount} active products
            </Text>
          </View>
        </View>

        <Feather name="chevron-right" size={24} color={COLORS.textSecondary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchable: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  info: {
    flex: 1,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 3,
  },
  slogan: {
    fontSize: 14,
    color: COLORS.primaryDark,
    marginBottom: 5,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  detailText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginLeft: 5,
  },
});

export default CompanyCard;
