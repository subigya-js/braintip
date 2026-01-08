import type { User } from '../context/UserContext';

interface UserDetailProps {
    user: User;
    onClose: () => void;
}

const UserDetail = ({ user, onClose }: UserDetailProps) => {
    const getAvatarColor = (id: number) => {
        const colors = ['#2d9d92', '#3b4d5c', '#1e7a6d', '#4a5f73'];
        return colors[id % colors.length];
    };

    const getInitial = (name: string) => {
        return name.charAt(0).toUpperCase();
    };

    return (
        <div className="user-detail-overlay" onClick={onClose}>
            <div className="user-detail-modal" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>×</button>

                <div className="detail-header">
                    <div
                        className="detail-avatar"
                        style={{ backgroundColor: getAvatarColor(user.id) }}
                    >
                        {getInitial(user.name)}
                    </div>
                    <div>
                        <h2>{user.name}</h2>
                        <p className="detail-username">@{user.username}</p>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Contact Information</h3>
                    <div className="detail-grid">
                        <div className="detail-field">
                            <label>Email</label>
                            <p>{user.email}</p>
                        </div>
                        <div className="detail-field">
                            <label>Phone</label>
                            <p>{user.phone}</p>
                        </div>
                        <div className="detail-field">
                            <label>Website</label>
                            <a href={user.website} target="_blank" rel="noopener noreferrer">{user.website}</a>
                        </div>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Address</h3>
                    <div className="detail-grid">
                        <div className="detail-field">
                            <label>Street</label>
                            <p>{user.address.street}, {user.address.suite}</p>
                        </div>
                        <div className="detail-field">
                            <label>City</label>
                            <p>{user.address.city}</p>
                        </div>
                        <div className="detail-field">
                            <label>Zipcode</label>
                            <p>{user.address.zipcode}</p>
                        </div>
                    </div>
                </div>

                <div className="detail-section">
                    <h3>Company</h3>
                    <div className="detail-grid">
                        <div className="detail-field">
                            <label>Name</label>
                            <p>{user.company.name}</p>
                        </div>
                        <div className="detail-field">
                            <label>Catch Phrase</label>
                            <p>{user.company.catchPhrase}</p>
                        </div>
                        <div className="detail-field">
                            <label>Business</label>
                            <p>{user.company.bs}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;
