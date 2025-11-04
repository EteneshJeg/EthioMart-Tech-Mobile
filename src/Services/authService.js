import api from "./api";

const AUTH_ENDPOINTS = {
  login: "/auth/login",
  register: "/auth/register",
  me: "/users/me",
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post(AUTH_ENDPOINTS.login, { email, password });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Login failed.");
  }
};

export const registerUser = async (data) => {
  try {
    const response = await api.post(AUTH_ENDPOINTS.register, data);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.message || "Registration failed.");
  }
};

// Function to check current user status
export const fetchCurrentUser = async () => {
  try {
    const response = await api.get(AUTH_ENDPOINTS.me);
    return response.data;
  } catch (error) {
    return null;
  }
};
