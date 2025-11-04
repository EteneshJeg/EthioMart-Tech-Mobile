import { Feather, Ionicons } from "@expo/vector-icons";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useLayoutEffect } from "react";

import { COLORS } from "../../constants/colors";
import ProductCard from "../../components/ProductCard";
import { globalStyles } from "../../styles/globalStyles";

const MOCK_RECOMMENDATIONS = [
  {
    id: "r1",
    title: "Heavy Duty Forklift",
    company: "Machinery Corp.",
    priceRange: "20,000 - 30,000",
    imageUri: "https://picsum.photos/id/207/400/300",
    location: "Debre Zeit",
  },
  {
    id: "r2",
    title: "1000 Litre Water Tank",
    company: "Storage Solutions",
    priceRange: "8,500",
    imageUri: "https://picsum.photos/id/208/400/300",
    location: "Addis Ababa",
  },
  {
    id: "r3",
    title: "Industrial Grade Drill Bits",
    company: "Tool Supply",
    priceRange: "1,200",
    imageUri: "https://picsum.photos/id/209/400/300",
    location: "Akaki",
  },
];

const ProductDetailsScreen = ({ navigation, route }) => {
  // Get the product data passed from the HomeFeedScreen
  const { product } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: product.title,
      headerBackTitleVisible: false,
    });
  }, [navigation, product.title]);

  const handleRecommendationPress = (item) => {
    navigation.push("ProductDetails", { product: item });
  };

  const renderRecommendationItem = ({ item }) => (
    <ProductCard
      product={item}
      onPress={() => handleRecommendationPress(item)}
      customStyle={styles.recommendationCard}
    />
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Image
        source={{ uri: product.imageUri }}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <Text style={styles.price}>ETB {product.priceRange}</Text>
        <Text style={styles.title}>{product.title}</Text>

        <View style={styles.locationContainer}>
          <Feather name="map-pin" size={16} color={COLORS.textSecondary} />
          <Text style={styles.locationText}>{product.location}</Text>
        </View>

        <Text style={styles.sectionTitle}>Product Description</Text>
        <Text style={styles.description}>
          This is a detailed description for {product.title}. It provides an
          overview of features, specifications, and potential uses. (Placeholder
          text to show scrollable content)
        </Text>

        <Text style={[styles.sectionTitle, { marginTop: 20 }]}>
          Related Products
        </Text>
        <FlatList
          data={MOCK_RECOMMENDATIONS}
          renderItem={renderRecommendationItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.recommendationList}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
    backgroundColor: COLORS.background,
  },
  contentContainer: {
    padding: 15,
  },
  price: {
    fontSize: 28,
    fontWeight: "900",
    color: COLORS.primaryDark,
    marginBottom: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  locationText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    paddingBottom: 5,
  },
  description: {
    fontSize: 16,
    color: COLORS.textSecondary,
    lineHeight: 24,
    marginBottom: 20,
  },
  recommendationList: {
    paddingRight: 15,
  },
  recommendationCard: {
    width: 200,
    marginRight: 5,
  },
});

export default ProductDetailsScreen;
