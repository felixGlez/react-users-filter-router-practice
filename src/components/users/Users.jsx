import { Link, useNavigate } from 'react-router-dom';
import {
	StyledStatus,
	StyledUserAvatar,
	StyledUserCard,
	StyledUsername,
	StyledUsernameContainer,
	StyledUsersContainer
} from './styles';

const Users = ({ filteredUsers }) => {
	// Hook para navegar desde cualquier elemento HTML
	const navigate = useNavigate();

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
					{/* <button onClick={() => navigate(`/${user.userId}`)}> Ver Detalles
					</button> */}
				</StyledUserCard>
			))}
		</StyledUsersContainer>
	);
};

export default Users;
