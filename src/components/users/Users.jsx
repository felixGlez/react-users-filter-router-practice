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
	// Hook para navegar desde cualquier elemento HTML que no sea un <a>.
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

					{/*
					Esto lo comento porque semánticamente en HTML está mal hecho, en todo caso sería el link (<a>) el que envuelve al botón

					<button>
						<Link to={`/${user.userId}`}>Ver Detalles</Link>
					</button> */}

					<button onClick={() => navigate(`/${user.userId}`)}>
						{' '}
						Ver Detalles
					</button>
				</StyledUserCard>
			))}
		</StyledUsersContainer>
	);
};

export default Users;
