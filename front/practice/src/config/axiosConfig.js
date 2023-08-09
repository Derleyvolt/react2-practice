import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3001', // URL base para todas as solicitações
    timeout: 5000, // Tempo limite para as solicitações (em milissegundos)
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;