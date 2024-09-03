import axios from 'axios';

export const AxiosMasterdataInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_MASTERDATA_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});