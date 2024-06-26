import axios from 'axios';
import { tableDto } from '../DTO/user.dto.ts';

const API_ENDPOINT = 'http://localhost:7070/user/create';

export const sendUserData = async (userData: tableDto) => {
    try {
        const response = await axios.post(API_ENDPOINT, userData, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error sending user data:', error);
        throw error;
    }
};
