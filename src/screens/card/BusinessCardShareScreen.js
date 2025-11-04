import { Feather, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { COLORS } from "../../constants/colors";
import React from "react";
import { globalStyles } from "../../styles/globalStyles";

const MOCK_CARD_DATA = {
  name: "SunPower Co.",
  slogan: "Harnessing the Future of Energy.",
  contact: "contact@sunpower.com",
  location: "Silicon Valley, CA",
  logoUri: "https://picsum.photos/id/237/200/200",
  productCount: 4,
};

const BusinessCardShareScreen = () => {
  const cardData = MOCK_CARD_DATA;

  const handleRedirect = () => {
    alert("Redirecting to full Company Profile in the app...");
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: cardData.logoUri }}
          style={styles.logo}
          resizeMode="contain"
        />

        <Text style={styles.name}>{cardData.name}</Text>
        <Text style={styles.slogan}>{cardData.slogan}</Text>

        <View style={styles.detailRow}>
          <Feather name="mail" size={18} color={COLORS.textSecondary} />
          <Text style={styles.detailText}>{cardData.contact}</Text>
        </View>
        <View style={styles.detailRow}>
          <Feather name="map-pin" size={18} color={COLORS.textSecondary} />
          <Text style={styles.detailText}>{cardData.location}</Text>
        </View>
        <View style={styles.detailRow}>
          <Feather name="box" size={18} color={COLORS.textSecondary} />
          <Text style={styles.detailText}>
            {cardData.productCount} Active Listings
          </Text>
        </View>

        <TouchableOpacity
          onPress={handleRedirect}
          style={[globalStyles.primaryButton, styles.ctaButton]}
        >
          <Text style={globalStyles.primaryButtonText}>
            <Ionicons name="link-outline" size={18} color={COLORS.white} /> View
            Full Profile & Products
          </Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Shared via YourAppName Marketplace
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 20,
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    width: "100%",
    maxWidth: 400,
    ...globalStyles.cardShadow,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
    borderWidth: 4,
    borderColor: COLORS.primaryDark,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 5,
  },
  slogan: {
    fontSize: 18,
    color: COLORS.primary,
    marginBottom: 20,
    textAlign: "center",
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  detailText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginLeft: 10,
  },
  ctaButton: {
    marginTop: 30,
    width: "100%",
  },
  footerText: {
    marginTop: 25,
    fontSize: 14,
    color: COLORS.textSecondary,
  },
});

export default BusinessCardShareScreen;
