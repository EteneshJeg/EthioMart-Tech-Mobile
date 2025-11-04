import {
  ActivityIndicator,
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

const RegisterScreen = ({ navigation }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const { register, isLoading } = useAuth();

  const handleRegister = () => {
    if (phoneNumber && password) {
      register({ phoneNumber, password });
    } else {
      alert("Please enter your phone number and password.");
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text style={styles.headerText}>Register</Text>
        </View>

        <View style={styles.formContainer}>
          <Text style={styles.welcomeText}>Let's Get Started</Text>
          <Text style={styles.subtitleText}>Create a new account</Text>

          <Text style={styles.inputLabel}>Phone number</Text>
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
            placeholder="Password (min 6 characters)"
            placeholderTextColor={COLORS.textSecondary}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity
            style={[globalStyles.primaryButton, styles.registerButton]}
            onPress={handleRegister}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color={COLORS.white} size="small" />
            ) : (
              <Text style={globalStyles.primaryButtonText}>Register</Text>
            )}
          </TouchableOpacity>

          <View style={styles.footerContainer}>
            <Text style={styles.switchText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate(ROUTES.Login)}
              disabled={isLoading}
            >
              <Text style={styles.linkText}>Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.background || "#FFFDFD",
    paddingVertical: 40,
  },
  container: {
    paddingHorizontal: 30,
  },
  topContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
    color: COLORS.textPrimary || "#333",
    marginTop: 20,
    marginBottom: 30,
  },
  formContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.textPrimary || "#333",
  },
  subtitleText: {
    fontSize: 14,
    color: COLORS.textSecondary || "#666",
    marginBottom: 30,
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
    marginBottom: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  registerButton: {
    height: 55,
    borderRadius: 10,
    marginTop: 10,
  },
  footerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 40,
  },
  switchText: {
    fontSize: 14,
    color: COLORS.textSecondary,
  },
  linkText: {
    color: COLORS.primary,
    fontWeight: "bold",
    fontSize: 14,
    marginLeft: 5,
  },
});

export default RegisterScreen;
