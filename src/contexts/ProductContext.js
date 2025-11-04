// src/contexts/ProductContext.js

import React, { createContext, useContext, useEffect, useState } from "react";

// import { fetchProducts } from '../services/productService'; // Uncomment when ready

const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch initial products on mount (placeholder logic)
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      // try {
      // const data = await fetchProducts();
      // setProducts(data);
      // } catch (e) {
      //     console.error("Error loading products:", e);
      // }
      // Simulated initial load:
      setTimeout(() => {
        setProducts([]); // Use empty array for context example
        setLoading(false);
      }, 1000);
    };
    loadProducts();
  }, []);

  // Function to add a newly created product to the context
  const addProduct = (newProduct) => {
    setProducts((prevProducts) => [newProduct, ...prevProducts]);
  };

  const contextValue = {
    products,
    loading,
    addProduct,
    // refreshProducts: loadProducts,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
};
