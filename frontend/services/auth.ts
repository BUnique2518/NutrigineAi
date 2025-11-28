import api from '@/lib/api';

export const authService = {
    async register(data: any) {
        const response = await api.post('/auth/register', data);
        return response.data;
    },

    async login(data: any) {
        const response = await api.post('/auth/login', data);
        return response.data;
    },

    async logout(refreshToken: string) {
        const response = await api.post('/auth/logout', { refreshToken });
        return response.data;
    },

    async refreshToken(refreshToken: string) {
        const response = await api.post('/auth/refresh', { refreshToken });
        return response.data;
    },
};
