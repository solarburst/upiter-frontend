import { api } from './api';
import { endpoints } from './lib';
import { Order, OrderResponse } from './types';

export const sendOrder = async (data: Order): Promise<OrderResponse> => {
    const res = await api.post(endpoints.order, data);
    return res.data;
};
