
let API_URL: string;
let WS_URL: string;
let BASE_URL: string;

if (process.env.NODE_ENV === 'production') {
    // In production, only use environment variable
    BASE_URL = process.env.BASE_URL as string;
} else {
    // In development, use environment variable or fallback to localhost
    BASE_URL = process.env.BASE_URL || 'localhost:4000/api';
}

if (process.env.NODE_ENV === 'production') {
    API_URL = `https://${BASE_URL}`;
    WS_URL = `wss://${BASE_URL}`;
} else {
    API_URL = `http://${BASE_URL}`;
    WS_URL = `ws://${BASE_URL}`;
}

export { API_URL, WS_URL };