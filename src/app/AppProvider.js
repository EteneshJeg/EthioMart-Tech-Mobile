import { AuthProvider } from "../contexts/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import RootNavigator from "../navigation/RootNavigator";

const AppProvider = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default AppProvider;
