import { Link } from 'react-router-dom';
import {
	StyledStatus,
	StyledUserAvatar,
	StyledUserCard,
	StyledUsername,
	StyledUsernameContainer,
	StyledUsersContainer
} from './styles';

const Users = ({ filteredUsers }) => {
	return (
		<StyledUsersContainer>
			{filteredUsers.map(user => (
				<StyledUserCard key={user.userId}>
					<StyledUserAvatar src={user.profileImage} />
					<StyledUsernameContainer>
						<StyledUsername $isTitle={true}>{user.name}</StyledUsername>
						<StyledUsername>@{user.username}</StyledUsername>
					</StyledUsernameContainer>
					<StyledStatus $isActive={user.active}>
						{user.active ? 'Activo' : 'Inactivo'}
					</StyledStatus>
					<button>
						<Link to={`/${user.userId}`}>Ver Detalles</Link>
					</button>
				</StyledUserCard>
			))}
		</StyledUsersContainer>
	);
};

export default Users;
