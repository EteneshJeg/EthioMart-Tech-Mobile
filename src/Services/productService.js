import api from "./api";

const PRODUCT_ENDPOINTS = {
  products: "/products",
  upload: "/upload/image",
};

export const fetchProducts = async (filters = {}) => {
  try {
    const response = await api.get(PRODUCT_ENDPOINTS.products, {
      params: filters,
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products.");
  }
};

export const createProduct = async (productData, imageUri) => {
  const formData = new FormData();

  Object.keys(productData).forEach((key) => {
    formData.append(key, productData[key]);
  });

  if (imageUri) {
    const file = {
      uri: imageUri,
      type: "image/jpeg",
      name: `product_image_${Date.now()}.jpg`,
    };
    formData.append("productImage", file);
  }

  try {
    const response = await api.post(PRODUCT_ENDPOINTS.products, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to create product listing."
    );
  }
};
