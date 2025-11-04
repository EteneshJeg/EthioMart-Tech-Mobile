import { Feather, Ionicons } from "@expo/vector-icons";
import {
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";

import { COLORS } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";
import { globalStyles } from "../../styles/globalStyles";

const placeholderProduct = {
  id: "1",
  title: "High-Efficiency Solar Panel Kit",
  description:
    "A comprehensive kit providing 10kW of power, perfect for medium-sized commercial buildings. Includes high-grade monocrystalline panels and a smart inverter. 25-year warranty included. Installation services available upon request.",
  priceRange: "$500 - $800 (Per Panel)",
  category: "Electronics",
  company: "SunPower Co.",
  companyId: "C1",
  location: "123 Tech Drive, Silicon Valley, CA",
  isPromoted: true,
  views: 1246,
  imageUri: "https://picsum.photos/id/200/600/400",
};

const ProductDetailsScreen = ({ route, navigation }) => {
  const product = route.params?.product || placeholderProduct;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: product.title,
      headerTintColor: COLORS.primary,
    });
  }, [navigation, product.title]);

  const handleContact = () => {
    alert(`Initiating contact for: ${product.company}`);
  };

  const navigateToCompanyProfile = () => {
    navigation.navigate(ROUTES.CompanyProfile, {
      companyId: product.companyId,
      companyName: product.company,
    });
  };

  return (
    <View style={globalStyles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: product.imageUri }}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.contentPadding}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.headerInfo}>
            <Text style={styles.price}>{product.priceRange}</Text>
            <Text style={styles.views}>👁️ {product.views} Views</Text>
          </View>

          <TouchableOpacity
            onPress={navigateToCompanyProfile}
            style={styles.companyLink}
          >
            <Feather name="briefcase" size={16} color={COLORS.primary} />
            <Text style={styles.companyName}>
              {product.company}{" "}
              <Text style={styles.viewProfile}>(View Profile)</Text>
            </Text>
          </TouchableOpacity>

          <View style={styles.detailRow}>
            <Feather name="tag" size={16} color={COLORS.textSecondary} />
            <Text style={styles.detailText}>Category: {product.category}</Text>
          </View>
          <View style={styles.detailRow}>
            <Feather name="map-pin" size={16} color={COLORS.textSecondary} />
            <Text style={styles.detailText}>
              Location: {product.location || "Not Specified"}
            </Text>
          </View>

          <Text style={styles.sectionTitle}>Product Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={handleContact}
          style={globalStyles.primaryButton}
        >
          <Text style={globalStyles.primaryButtonText}>
            <Ionicons name="chatbox-outline" size={18} color={COLORS.white} />{" "}
            Contact Seller Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
    backgroundColor: COLORS.border,
  },
  touchable: {
    flex: 1,
    margin: 5,
    maxWidth: "48%",
  },
  contentPadding: {
    padding: 20,
    paddingBottom: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  headerInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 15,
    marginBottom: 15,
  },
  price: {
    fontSize: 22,
    fontWeight: "900",
    color: COLORS.primaryDark,
  },
  views: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  companyLink: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  companyName: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.primary,
    marginLeft: 8,
  },
  viewProfile: {
    fontSize: 14,
    fontWeight: "400",
    color: COLORS.textSecondary,
    textDecorationLine: "underline",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    overflow: "hidden",
    backgroundColor: COLORS.white,
    borderRadius: 10,
    width: "100%",
  },
  description: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  detailRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  detailText: {
    fontSize: 15,
    color: COLORS.textSecondary,
    marginLeft: 8,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
});

export default ProductDetailsScreen;
