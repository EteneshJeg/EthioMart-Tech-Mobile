import {
  ActivityIndicator,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import { COLORS } from "../../constants/colors";
import { ROUTES } from "../../constants/routes";
import { globalStyles } from "../../styles/globalStyles";
import { useAuth } from "../../contexts/AuthContext";

const LOGIN_ILLUSTRATION = require("../../../assets/icons/marketing.png");

const LoginScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { login, isLoading } = useAuth();

  const handleLogin = () => {
    if (phoneNumber && password) {
      login(phoneNumber, password);
    } else {
      alert("Please enter your phone number and password.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.safeArea}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topContainer}>
          <Image source={LOGIN_ILLUSTRATION} style={styles.illustration} />
          <Text style={styles.headerText}>Login</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Welcome Back!</Text>

          <Text style={styles.inputLabel}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="+251 xx xxx xxxx"
            placeholderTextColor={COLORS.textSecondary}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />

          <Text style={styles.inputLabel}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            placeholderTextColor={COLORS.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.forgotPasswordButton}
            onPress={() => navigation.navigate(ROUTES.ForgotPassword)}
            disabled={isLoading}
          >
            <Text style={styles.forgotPasswordText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[globalStyles.primaryButton, styles.loginButton]}
            onPress={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color={COLORS.white} size="small" />
            ) : (
              <Text style={globalStyles.primaryButtonText}>Login</Text>
            )}
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.switchText}>Don't have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.Register)}
              disabled={isLoading}
            >
              <Text style={styles.linkText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 50,
    paddingBottom: 30,
    backgroundColor: COLORS.background || "#FFFDFD",
  },
  topContainer: {
    alignItems: "center",
  },
  illustration: {
    width: 250,
    height: 250,
    resizeMode: "contain",
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.textPrimary || "#333",
  },
  formContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    color: COLORS.textPrimary || "#333",
    marginBottom: 10,
  },
  inputLabel: {
    fontSize: 14,
    color: COLORS.textSecondary || "#999",
    marginBottom: 5,
  },
  input: {
    backgroundColor: COLORS.white,
    height: 55,
    borderColor: COLORS.border || "#EEE",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  forgotPasswordButton: {
    alignSelf: "flex-end",
  },
  forgotPasswordText: {
    color: COLORS.textSecondary || "#666",
    fontSize: 14,
  },
  loginButton: {
    height: 55,
    borderRadius: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  switchText: {
    fontSize: 14,
    color: COLORS.textSecondary || "#666",
  },
  linkText: {
    color: COLORS.primary || "#FFA500",
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
});

export default LoginScreen;
