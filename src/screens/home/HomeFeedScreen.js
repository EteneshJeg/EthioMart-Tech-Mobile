import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { COLORS } from "../../constants/colors";
import ProductCard from "../../components/ProductCard";
import { ROUTES } from "../../constants/routes";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../../components/SearchBar";
import { globalStyles } from "../../styles/globalStyles";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const MOCK_PRODUCTS = [
  {
    id: "1",
    title: "High-Efficiency Solar Panel Kit",
    company: "SunPower Co.",
    priceRange: "500 - 800",
    isPromoted: true,
    views: 1245,
    imageUri: "https://picsum.photos/id/200/400/300",
    location: "Addis Ababa, Ethiopia",
  },
  {
    id: "2",
    title: "Custom Steel Fabrication Services",
    company: "SteelCraft Industries",
    priceRange: "Quote Required",
    isPromoted: false,
    views: 890,
    imageUri: "https://picsum.photos/id/201/400/300",
    location: "Kality, Addis Ababa",
  },
  {
    id: "3",
    title: "Bulk Organic Coffee Beans (Ethiopian Yirgacheffe)",
    company: "Gourmet Imports",
    priceRange: "$15/kg - $25/kg",
    isPromoted: true,
    views: 2100,
    imageUri: "https://picsum.photos/id/202/400/300",
    location: "Jimma, Oromia",
  },
  {
    id: "4",
    title: "Advanced Cloud Computing Solutions",
    company: "TechNova",
    priceRange: "Monthly Subscription",
    isPromoted: false,
    views: 450,
    imageUri: "https://picsum.photos/id/203/400/300",
    location: "Silicon Valley, USA",
  },
  {
    id: "5",
    title: "Premium Grade Industrial Robot Arm",
    company: "Automate Systems Inc.",
    priceRange: "$10,000 - $15,000",
    isPromoted: true,
    views: 3120,
    imageUri: "https://picsum.photos/id/204/400/300",
    location: "Addis Ababa, Ethiopia",
  },
  {
    id: "6",
    title: "Premium Jewlery",
    company: "jewlery Systems Inc.",
    priceRange: "$10,000 - $15,000",
    isPromoted: true,
    views: 3120,
    imageUri: "https://picsum.photos/id/204/400/300",
    location: "Addis Ababa, Ethiopia",
  },
];

const CATEGORIES = [
  "Machinery",
  "Electronics",
  "Raw Materials",
  "Services",
  "Real Estate",
  "Food & Drink",
];

const HomeFeedScreen = ({ navigation }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  const insets = useSafeAreaInsets();
  const filteredProducts = MOCK_PRODUCTS.filter((p) =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProductPress = (product) => {
    navigation.navigate(ROUTES.ProductDetails, { product });
  };

  const renderProductItem = ({ item }) => (
    <ProductCard product={item} onPress={() => handleProductPress(item)} />
  );

  const renderCategoryChip = (category) => (
    <TouchableOpacity
      key={category}
      style={[
        styles.categoryChip,
        selectedCategory === category && styles.categoryChipActive,
      ]}
      onPress={() =>
        setSelectedCategory(selectedCategory === category ? null : category)
      }
    >
      <Text
        style={[
          styles.categoryText,
          selectedCategory === category && styles.categoryTextActive,
        ]}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container} edges={["top"]}>
      <View style={[styles.topContainer, { paddingTop: insets.top + 5 }]}>
        <SearchBar onSearch={setSearchTerm} value={searchTerm} />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoryContainer}
        >
          {CATEGORIES.map(renderCategoryChip)}
        </ScrollView>
      </View>

      <Text style={globalStyles.title}>
        {selectedCategory ? `${selectedCategory} Products` : "Latest Listings"}
      </Text>

      <FlatList
        key={"2-cols"}
        data={filteredProducts}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            No products found for this search/filter.
          </Text>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: COLORS.white,
  },
  categoryContainer: {
    paddingHorizontal: 15,
    paddingBottom: 10,
    backgroundColor: COLORS.white,
  },
  categoryChip: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginRight: 10,
  },
  categoryChipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  categoryText: {
    fontSize: 14,
    color: COLORS.textSecondary,
    fontWeight: "500",
  },
  categoryTextActive: {
    color: COLORS.white,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 50,
    color: COLORS.textSecondary,
    fontSize: 16,
  },
  row: {
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default HomeFeedScreen;
