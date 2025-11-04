// src/utils/helpers.js

/**
 * Formats a raw number into a localized currency string.
 * @param {number} amount
 * @param {string} locale
 * @param {string} currency
 * @returns {string}
 */
export const formatCurrency = (amount, locale = "en-US", currency = "USD") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(amount);
};

/**
 * Creates a slug from a string (e.g., "My Product Title" -> "my-product-title")
 * @param {string} text
 * @returns {string}
 */
export const createSlug = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove non-word chars
    .replace(/[\s_-]+/g, "-") // Replace spaces/underscores with hyphen
    .replace(/^-+|-+$/g, ""); // Remove leading/trailing hyphens
};
