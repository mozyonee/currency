import axios from 'axios';

const api = axios.create({
	baseURL: process.env.SERVER_URL ?? 'http://localhost:3001',
});

export default api;
