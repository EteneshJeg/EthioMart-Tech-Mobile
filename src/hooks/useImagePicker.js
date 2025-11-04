import * as ImagePicker from "expo-image-picker";

import { useState } from "react";

const useImagePicker = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const pickImage = async (source) => {
    setLoading(true);
    setError(null);
    let result = null;

    try {
      let options = {
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 0.5,
      };

      if (source === "camera") {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
          setError("Camera permission is required.");
          setLoading(false);
          return;
        }
        result = await ImagePicker.launchCameraAsync(options);
      } else {
        // 'gallery'
        const permission =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
          setError("Media library permission is required.");
          setLoading(false);
          return;
        }
        result = await ImagePicker.launchImageLibraryAsync(options);
      }

      if (!result.canceled && result.assets && result.assets.length > 0) {
        setImage(result.assets[0].uri);
      }
    } catch (e) {
      console.error("Image Picker Error:", e);
      setError("Failed to pick or upload image.");
    } finally {
      setLoading(false);
    }
  };

  const clearImage = () => {
    setImage(null);
    setError(null);
  };

  return {
    image,
    loading,
    error,
    pickImage,
    takePhoto: () => pickImage("camera"),
    clearImage,
  };
};

export default useImagePicker;
