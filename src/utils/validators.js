// src/utils/validators.js

export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // Simple check: Must be at least 6 characters
  return password.length >= 6;
};

export const validateProductForm = (productData) => {
  if (!productData.title || productData.title.length < 5) {
    return "Product title must be at least 5 characters.";
  }
  if (!productData.priceRange) {
    return "Price range is required.";
  }
  // More complex checks can go here
  return null; // Return null if validation succeeds
};
