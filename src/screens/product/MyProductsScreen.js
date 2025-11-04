import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS } from "../../constants/colors";
import { Feather } from "@expo/vector-icons";
import ProductCard from "../../components/ProductCard";
import { ROUTES } from "../../constants/routes";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/globalStyles";
import { useAuth } from "../../contexts/AuthContext";

const MOCK_MY_PRODUCTS = [
  {
    id: "1",
    title: "My Awesome Widget",
    company: "My Company Inc.",
    priceRange: "$10 - $20",
    isPromoted: true,
    views: 50,
    imageUri: "https://picsum.photos/id/1018/400/300",
    location: "Bole, Addis Ababa",
  },
  {
    id: "2",
    title: "Local Delivery Service",
    company: "My Company Inc.",
    priceRange: "Hourly Rate",
    isPromoted: false,
    views: 15,
    imageUri: "https://picsum.photos/id/1019/400/300",
    location: "Bole, Addis Ababa",
  },
];

const MyProductsScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  const ListHeader = () => (
    <SafeAreaView style={styles.header}>
      <Text style={styles.welcomeText}>
        Hello, {user?.isCompany ? "Company Rep" : "Individual"}!
      </Text>
      <Text style={styles.emailText}>{user?.email}</Text>

      {user?.isCompany ? (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigation.navigate(ROUTES.MyCompany)}
        >
          <Feather name="settings" size={18} color={COLORS.primary} />
          <Text style={styles.actionButtonText}>Manage Company Profile</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => alert("Update Individual Profile Placeholder")}
        >
          <Feather name="user" size={18} color={COLORS.primary} />
          <Text style={styles.actionButtonText}>Update Profile Info</Text>
        </TouchableOpacity>
      )}

      <Text style={globalStyles.title}>
        My Active Listings ({MOCK_MY_PRODUCTS.length})
      </Text>
    </SafeAreaView>
  );

  const renderProductItem = ({ item }) => (
    <ProductCard
      product={item}
      onPress={() => alert(`Edit product: ${item.title}`)}
    />
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={MOCK_MY_PRODUCTS}
        renderItem={renderProductItem}
        numColumns={2}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeader}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text style={styles.emptyText}>
            You have no active products listed.
          </Text>
        }
      />

      <TouchableOpacity style={styles.logoutButton} onPress={logout}>
        <Text style={styles.logoutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  touchable: {
    flex: 1,
    marginHorizontal: 5,
    marginVertical: 10,
    maxWidth: "50%",
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.textPrimary,
  },
  emailText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 15,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.background,
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.primary,
    marginBottom: 20,
  },
  actionButtonText: {
    color: COLORS.primary,
    fontWeight: "600",
    marginLeft: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    color: COLORS.textSecondary,
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: COLORS.error,
    padding: 15,
    alignItems: "center",
    margin: 15,
    borderRadius: 10,
  },
  logoutButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default MyProductsScreen;
