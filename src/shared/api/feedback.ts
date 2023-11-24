import { api } from './api';
import { endpoints } from './lib';
import { FeedbackItem } from './types';

export const getFeedback = async (): Promise<FeedbackItem[]> => {
    const res = await api.get(endpoints.feedback);
    return res.data.data.items;
};
