import LoginScreen from "../screens/auth/LoginScreen";
import { ROUTES } from "../constants/routes";
import React from "react";
import RegisterScreen from "../screens/auth/RegisterScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ROUTES.Login} component={LoginScreen} />
      <Stack.Screen name={ROUTES.Register} component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
