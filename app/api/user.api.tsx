import { AxiosResponse } from 'axios';
import { AxiosMasterdataInstance } from '@/app/api/axiosMasterdataInstance';

const endpoints = {
    getUsers: (): Promise<AxiosResponse> => AxiosMasterdataInstance.get('/masterdata/users'),
    getUserDetail: (id: number): Promise<AxiosResponse> => AxiosMasterdataInstance.get(`/masterdata/users/${id}`),
};

export default endpoints;