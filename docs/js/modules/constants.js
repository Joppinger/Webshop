// GitHub configuration
export const GITHUB_CONFIG = {
    OWNER: 'joppinger',
    REPO: 'Webshop'
};

// API endpoints
const BASE_API_URL = 'https://api.github.com';

export const API_ENDPOINTS = {
    GITHUB_API: BASE_API_URL,
    REPO_API: `${BASE_API_URL}/repos/${GITHUB_CONFIG.OWNER}/${GITHUB_CONFIG.REPO}`,
    ISSUES_API: `${BASE_API_URL}/repos/${GITHUB_CONFIG.OWNER}/${GITHUB_CONFIG.REPO}/issues`
};

// Debug - log configuration
console.log('GitHub Config:', {
    owner: GITHUB_CONFIG.OWNER,
    repo: GITHUB_CONFIG.REPO
});
console.log('API Endpoints:', {
    base: API_ENDPOINTS.GITHUB_API,
    repo: API_ENDPOINTS.REPO_API,
    issues: API_ENDPOINTS.ISSUES_API
});

// Order status constants
export const ORDER_STATUS = {
    PENDING: 'pending',
    PROCESSING: 'processing',
    COMPLETED: 'completed',
    CANCELLED: 'cancelled'
};

// Error messages
export const ERROR_MESSAGES = {
    CONNECTION_ERROR: 'Cannot connect to order system. Please check your internet connection.',
    RATE_LIMIT: 'Order system is busy. Please try again in {minutes} minutes.',
    SYSTEM_UNAVAILABLE: 'Order system is currently unavailable. Please try again later.',
    INVALID_ORDER: 'Invalid order data. Please check your order and try again.',
    AUTH_FAILED: 'Authentication failed. Please try again later.'
};