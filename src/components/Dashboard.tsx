import { useState } from 'react';
import type { User } from '../context/UserContext';
import { useUsers } from '../context/UserContext';
import UserCard from './UserCard';
import UserDetail from './UserDetail';

const Dashboard = () => {
    const { users, loading, error } = useUsers();
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

    if (loading) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading users...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <p>Error: {error}</p>
            </div>
        );
    }

    return (
        <div className="dashboard">
            <header className="dashboard-header">
                <h1>Dashboard</h1>
            </header>

            <div className="users-grid">
                {users.map((user) => (
                    <UserCard
                        key={user.id}
                        user={user}
                        onClick={setSelectedUser}
                    />
                ))}
            </div>

            {selectedUser && (
                <UserDetail
                    user={selectedUser}
                    onClose={() => setSelectedUser(null)}
                />
            )}
        </div>
    );
};

export default Dashboard;
