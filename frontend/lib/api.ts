import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add a request interceptor to attach the token
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Add a response interceptor to handle token refresh (optional, but good practice)
// For now, we'll just handle 401s by clearing storage if needed, or implement refresh logic later
api.interceptors.response.use(
    (response) => response,
    async (error) => {
        // Simple error handling for now
        return Promise.reject(error);
    }
);

export default api;
