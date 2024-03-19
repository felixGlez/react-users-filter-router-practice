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
					<button>Ver Detalles</button>
				</StyledUserCard>
			))}
		</StyledUsersContainer>
	);
};

export default Users;
