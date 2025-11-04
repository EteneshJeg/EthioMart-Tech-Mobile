import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS } from "../constants/colors";
import { Feather } from "@expo/vector-icons";
import React from "react";

const ImageUploader = ({
  image,
  loading,
  onPickImage,
  onTakePhoto,
  onClearImage,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Product Images (Max 5)</Text>

      {image ? (
        <View style={styles.imagePreviewContainer}>
          <Image source={{ uri: image }} style={styles.imagePreview} />
          <TouchableOpacity onPress={onClearImage} style={styles.removeButton}>
            <Feather name="x-circle" size={24} color={COLORS.error} />
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.uploadBox}>
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : (
            <View>
              <TouchableOpacity
                style={styles.uploadOption}
                onPress={onPickImage}
              >
                <Feather name="image" size={30} color={COLORS.primary} />
                <Text style={styles.uploadText}>Select from Gallery</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.uploadOption}
                onPress={onTakePhoto}
              >
                <Feather name="camera" size={30} color={COLORS.primaryDark} />
                <Text style={styles.uploadText}>Take a Photo</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}

      {/* Add button for multiple images (MVP focus on one for now) */}
      {image && (
        <View style={styles.addButtonRow}>
          <TouchableOpacity
            style={[styles.addButton, { backgroundColor: COLORS.primaryDark }]}
            onPress={onPickImage}
          >
            <Feather name="plus" size={20} color={COLORS.white} />
            <Text style={styles.addButtonText}>Add More</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 10,
  },
  uploadBox: {
    borderWidth: 2,
    borderColor: COLORS.border,
    borderStyle: "dashed",
    borderRadius: 10,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
  },
  uploadOption: {
    alignItems: "center",
    marginHorizontal: 15,
  },
  uploadText: {
    color: COLORS.textSecondary,
    marginTop: 5,
    fontSize: 14,
  },
  imagePreviewContainer: {
    position: "relative",
    marginBottom: 10,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  removeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: COLORS.white,
    borderRadius: 15,
    padding: 2,
  },
  addButtonRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  addButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: COLORS.white,
    fontWeight: "600",
    marginLeft: 5,
  },
});

export default ImageUploader;
