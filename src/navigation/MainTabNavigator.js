import { Feather, Ionicons } from "@expo/vector-icons";
import React, { useEffect } from "react";

import AISearchScreen from "../screens/ai/AISearchScreen";
import { COLORS } from "../constants/colors";
import CreateProductScreen from "../screens/product/CreateProductScreen";
import HomeFeedScreen from "../screens/home/HomeFeedScreen";
import MyProductsScreen from "../screens/product/MyProductsScreen";
import { ROUTES } from "../constants/routes";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useAuth } from "../contexts/AuthContext";

const Tab = createBottomTabNavigator();
const AUTH_STACK_NAME = "AuthStack";

const AuthGateScreen = ({ navigation }) => {
  React.useEffect(() => {
    navigation.navigate(AUTH_STACK_NAME, {
      redirectTo: ROUTES.CreateProduct,
    });
  }, [navigation]);

  return <View style={{ flex: 1 }} />;
};

const MainTabNavigator = () => {
  const { isAuthenticated } = useAuth();
  const PostComponent = isAuthenticated ? CreateProductScreen : AuthGateScreen;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.textSecondary,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
          borderTopWidth: 1,
          borderTopColor: COLORS.border,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
        tabBarIcon: ({ color, size }) => {
          let iconComponent;

          if (route.name === ROUTES.HomeFeed) {
            iconComponent = <Feather name="home" size={size} color={color} />;
          } else if (route.name === ROUTES.CreateProduct) {
            iconComponent = (
              <Ionicons
                name="add-circle"
                size={size * 1.5}
                color={COLORS.primary}
              />
            );
          } else if (route.name === ROUTES.AISearch) {
            iconComponent = (
              <Ionicons name="sparkles" size={size} color={color} />
            );
          } else if (route.name === ROUTES.MyProducts) {
            iconComponent = <Feather name="user" size={size} color={color} />;
          }

          return iconComponent;
        },
      })}
    >
      <Tab.Screen
        name={ROUTES.HomeFeed}
        component={HomeFeedScreen}
        options={{ title: "Feed" }}
      />
      <Tab.Screen
        name={ROUTES.CreateProduct}
        component={PostComponent}
        options={{ title: "Post" }}
      />
      <Tab.Screen
        name={ROUTES.AISearch}
        component={AISearchScreen}
        options={{ title: "AI Search" }}
      />
      <Tab.Screen
        name={ROUTES.MyProducts}
        component={MyProductsScreen}
        options={{ title: "Me" }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
