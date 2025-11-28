import api from '@/lib/api';

export const onboardingService = {
    async submitOnboardingForm(data: any) {
        const response = await api.post('/onboarding/form', data);
        return response.data;
    },

    async getOnboardingFormData() {
        const response = await api.get('/onboarding/form-data');
        return response.data;
    },
};
