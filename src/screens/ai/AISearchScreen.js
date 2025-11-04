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
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/globalStyles";

const AISearchScreen = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (!query.trim()) return;

    setLoading(true);
    setResult(null);

    // Simulate an AI API call delay
    setTimeout(() => {
      setLoading(false);
      setResult(
        `AI analyzed your request for "${query}" and found 3 top products and 1 relevant company profile based on advanced semantic matching.`
      );
    }, 2000);
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={globalStyles.title}>🔮 AI Powered Search</Text>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.instruction}>
          Describe the product or service you need in detail. Our AI will
          analyze your query and find the best matches across the platform.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="e.g., I need 500 meters of high-pressure liquid tubing for a chemical plant."
          value={query}
          onChangeText={setQuery}
          multiline
          numberOfLines={4}
        />

        <TouchableOpacity
          style={[globalStyles.primaryButton, styles.searchButton]}
          onPress={handleSearch}
          disabled={loading || !query.trim()}
        >
          {loading ? (
            <ActivityIndicator color={COLORS.white} />
          ) : (
            <Text style={globalStyles.primaryButtonText}>
              <Ionicons name="sparkles" size={18} color={COLORS.white} />{" "}
              Analyze & Search
            </Text>
          )}
        </TouchableOpacity>

        {result && (
          <View style={styles.resultBox}>
            <Text style={styles.resultTitle}>Search Results Summary:</Text>
            <Text style={styles.resultText}>{result}</Text>
            <TouchableOpacity style={styles.viewMatchesButton}>
              <Text style={styles.viewMatchesText}>View Detailed Matches</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContent: {
    padding: 15,
  },
  instruction: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 20,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  input: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    height: 120,
    textAlignVertical: "top",
    marginBottom: 20,
  },
  searchButton: {
    width: "100%",
  },
  resultBox: {
    marginTop: 30,
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: COLORS.primary,
  },
  resultTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  resultText: {
    fontSize: 16,
    color: COLORS.textSecondary,
    marginBottom: 15,
  },
  viewMatchesButton: {
    alignSelf: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: COLORS.primaryDark,
  },
  viewMatchesText: {
    color: COLORS.white,
    fontWeight: "600",
  },
});

export default AISearchScreen;
