import axios from 'axios';
import axiosRetry from 'axios-retry';
import { store } from '@/url/redux/store';
import {
    getAccessToken,
    getRefreshToken,
    saveTokens,
    clearTokens,
} from '@/utils/storage';
import ROUTES from '@/utils/ROUTES';
import { logout } from '@/url/redux/slices/authSlice';

const baseURL = 'https://abn_investment.johnabrahamtosin.workers.dev/api/v1';

export const userRequest = axios.create({ baseURL, headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHTTPRequest" } });
export const publicRequest = axios.create({ baseURL, headers: { "Content-Type": "application/json", "X-Requested-With": "XMLHTTPRequest" } });
export const userFileUpload = axios.create({
    baseURL,
    headers: { 'Content-Type': 'multipart/form-data' },
});

let refreshAttempted = false; // Track refresh failure

const handleLogout = async () => {
    refreshAttempted = false;
    clearTokens();
    await store.dispatch(logout());

    if (window.location.pathname === ROUTES.login) return;

    window.location.href = ROUTES.login;
};

// Request Interceptor: Attach Token
userRequest.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

userFileUpload.interceptors.request.use(
    (config) => {
        const token = getAccessToken();
        if (token) config.headers.Authorization = `Bearer ${token}`;
        return config;
    },
    (error) => Promise.reject(error)
);

// Response Interceptor: Handle Token Expiry and Server Errors
userRequest.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Handle 500 Internal Server Error
        if (error.response?.status === 500 || error.response?.data?.statusCode === 500) {
            handleLogout();
            return Promise.reject(error);
        }

        // If 401 and not retried yet
        if (error.response?.data?.statusCode === 401 && !originalRequest._retry) {
            if (refreshAttempted) {
                handleLogout(); // Logout after one failed refresh
                return Promise.reject(error);
            }

            originalRequest._retry = true;
            refreshAttempted = true;
        }

        return Promise.reject(error);
    }
);

userFileUpload.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 500 || error.response?.data?.statusCode === 500) {
            handleLogout();
        }
        return Promise.reject(error);
    }
);

publicRequest.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response?.status === 500 || error.response?.data?.statusCode === 500) {
            handleLogout();
        }
        return Promise.reject(error);
    }
);

// Apply Axios Retry (Retries only once)
axiosRetry(userRequest, {
    retries: 1,
});
