import { APP_TABS, AUTH_STACK, ROUTES } from "../constants/routes";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import AuthStack from "./AuthStack";
import { COLORS } from "../constants/colors";
import MainTabNavigator from "./MainTabNavigator";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screensMap } from "./screensMap";
import { useAuth } from "../contexts/AuthContext";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={APP_TABS}
    >
      <Stack.Screen name={APP_TABS} component={MainTabNavigator} />
      <Stack.Screen name={AUTH_STACK} component={AuthStack} />
      <Stack.Screen
        name={ROUTES.ProductDetails}
        component={screensMap[ROUTES.ProductDetails]}
        options={{
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
});

export default RootNavigator;
