import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS } from "../../constants/colors";
import ImageUploader from "../../components/ImageUploader";
import { SafeAreaView } from "react-native-safe-area-context";
import { globalStyles } from "../../styles/globalStyles";
import useImagePicker from "../../hooks/useImagePicker";

const CreateProductScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [isPromoted, setIsPromoted] = useState(false);

  const { image, loading, error, pickImage, takePhoto, clearImage } =
    useImagePicker();

  const handlePostProduct = () => {
    if (!title || !description || !priceRange || !category || !image) {
      alert("Please fill out all required fields and upload an image.");
      return;
    }

    const newProduct = {
      title,
      description,
      category,
      priceRange,
      isPromoted,
      imageUri: image,
    };

    console.log("Product to Post:", newProduct);
    alert("Product post submitted for review!");

    setTitle("");
    setDescription("");
    setCategory("");
    setPriceRange("");
    setIsPromoted(false);
    clearImage();
    navigation.navigate("HomeFeed");
  };

  return (
    <SafeAreaView style={globalStyles.container}>
      <Text style={[globalStyles.title, { paddingBottom: 10 }]}>
        Create New Listing
      </Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageUploader
          image={image}
          loading={loading}
          onPickImage={() => pickImage("gallery")}
          onTakePhoto={() => takePhoto("camera")}
          onClearImage={clearImage}
        />
        {error && <Text style={styles.errorText}>{error}</Text>}

        <View style={styles.formContainer}>
          <Text style={styles.label}>Product Title</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Industrial Grade 3D Printer"
            value={title}
            onChangeText={setTitle}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, styles.textarea]}
            placeholder="Detailed description of the product/service..."
            value={description}
            onChangeText={setDescription}
            multiline
            numberOfLines={4}
          />

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Category</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., Machinery"
                value={category}
                onChangeText={setCategory}
              />
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Price Range</Text>
              <TextInput
                style={styles.input}
                placeholder="$100 - $500"
                value={priceRange}
                onChangeText={setPriceRange}
              />
            </View>
          </View>

          <View style={styles.switchRow}>
            <Text style={styles.label}>Flag as Promoted?</Text>
            <Switch
              trackColor={{ false: COLORS.border, true: COLORS.primaryDark }}
              thumbColor={COLORS.white}
              onValueChange={setIsPromoted}
              value={isPromoted}
            />
          </View>
          <Text style={styles.hintText}>
            Promoted posts get higher visibility in the feed.
          </Text>
        </View>

        <TouchableOpacity
          onPress={handlePostProduct}
          style={[globalStyles.primaryButton, { margin: 15, marginBottom: 40 }]}
        >
          <Text style={globalStyles.primaryButtonText}>
            Post Product Listing
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  label: {
    fontSize: 15,
    fontWeight: "600",
    color: COLORS.textPrimary,
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: COLORS.white,
    height: 50,
    borderColor: COLORS.border,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  textarea: {
    height: 100,
    paddingTop: 15,
    textAlignVertical: "top",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  halfInput: {
    width: "48%",
  },
  switchRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  hintText: {
    fontSize: 13,
    color: COLORS.textSecondary,
    marginBottom: 10,
  },
  errorText: {
    color: COLORS.error,
    textAlign: "center",
    paddingBottom: 10,
  },
});

export default CreateProductScreen;
