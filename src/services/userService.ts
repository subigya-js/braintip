import type { User } from '../context/UserContext';
import { API_BASE_URL } from '../utils/constants';

export const userService = {
    async fetchUsers(): Promise<User[]> {
        const response = await fetch(`${API_BASE_URL}/users`);

        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }

        return response.json();
    }
};
