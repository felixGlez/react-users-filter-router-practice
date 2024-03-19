import styled from 'styled-components';

const StyledUsersContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;
`;

const StyledUserCard = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
	padding: 0.5rem;
	border-radius: 0.75rem;
`;

const StyledUserAvatar = styled.img`
	width: 50px;
	border-radius: 50px;
`;

const StyledUsernameContainer = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	width: 150px;
`;

const StyledUsername = styled.p`
	margin-top: 0;
	margin-bottom: 0;
	font-weight: ${({ $isTitle }) => $isTitle && '700'};
	font-size: ${({ $isTitle }) => ($isTitle ? '1rem' : '0.8rem')};
`;

const StyledStatus = styled.p`
	margin-top: 0;
	margin-bottom: 0;
	color: ${({ $isActive }) => ($isActive ? 'green' : 'red')};
`;

export {
	StyledUsersContainer,
	StyledUserCard,
	StyledUserAvatar,
	StyledUsernameContainer,
	StyledUsername,
	StyledStatus
};
