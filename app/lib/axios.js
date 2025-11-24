import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL || "/api";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // envia cookies HttpOnly al mismo dominio / CORS si está configurado
  timeout: 10000, // 10s
});

// Request interceptor: añade Authorization si hay token en localStorage
api.interceptors.request.use(
  (config) => {
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
      if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (e) {
      // no-op
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor: devuelve response.data y normaliza errores
api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const err = error?.response?.data || { message: error.message || "Error de red" };
    return Promise.reject(err);
  }
);

// Helper para setear/quitar token en tiempo de ejecución (opcional)
export function setAuthToken(token) {
  if (token) {
    localStorage.setItem("token", token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete api.defaults.headers.common.Authorization;
  }
}

export default api;