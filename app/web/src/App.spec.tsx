
import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, vi, it, beforeEach, Mock } from 'vitest';
import { App } from './App';
import { getAllUsers } from './api';

vi.mock('./api', () => ({
    getAllUsers: vi.fn(),
}));

const mockUsers = [
    { name: 'John Doe', age: 30, company: 'Company A' },
    { name: 'Jane Smith', age: 25, company: 'Company B' },
];

describe('App component', () => {
    beforeEach(() => {
        (getAllUsers as Mock).mockResolvedValue(mockUsers);
    });

    it('should renders user data correctly', async () => {
        const screen = render(<App />);

        await waitFor(() => {
            mockUsers.forEach(user => {
                expect(screen.getByText(user.name)).toBeInTheDocument();
                expect(screen.getByText(user.age.toString())).toBeInTheDocument();
                expect(screen.getByText(user.company)).toBeInTheDocument();
            });
        });
    });
});