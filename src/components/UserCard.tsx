import { MdBusiness, MdEmail, MdLanguage, MdLocationOn } from 'react-icons/md';
import type { User } from '../context/UserContext';

interface UserCardProps {
    user: User;
    onClick: (user: User) => void;
}

const UserCard = ({ user, onClick }: UserCardProps) => {
    const getAvatarColor = (id: number) => {
        const colors = ['#2d9d92', '#3b4d5c', '#1e7a6d', '#4a5f73'];
        return colors[id % colors.length];
    };

    const getInitial = (name: string) => {
        return name.charAt(0).toUpperCase();
    };

    return (
        <div className="user-card" onClick={() => onClick(user)}>
            <div className="user-card-header">
                <div
                    className="user-avatar"
                    style={{ backgroundColor: getAvatarColor(user.id) }}
                >
                    {getInitial(user.name)}
                </div>
                <div className="user-info">
                    <h3 className="user-name">{user.name}</h3>
                    <span className="user-username">@{user.username}</span>
                </div>
            </div>

            <div className="user-details">
                <div className="detail-item">
                    <MdEmail className="icon" />
                    <span className="detail-text">{user.email}</span>
                </div>
                <div className="detail-item">
                    <MdBusiness className="icon" />
                    <span className="detail-text">{user.company.name}</span>
                </div>
            </div>

            <div className="user-footer">
                <div className="footer-item">
                    <MdLocationOn className="icon" />
                    <span className="footer-text">{user.address.city}</span>
                </div>
                <div className="footer-item">
                    <MdLanguage className="icon" />
                    <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer" className="footer-text">{user.website}</a>
                </div>
            </div>
        </div>
    );
};

export default UserCard;
