import { useState } from 'react';
import Filters, {
	filterByActive,
	searchUsers,
	sortUsers
} from '../filters/Filters';
import Main from '../main/Main';
import Users from '../users/Users';
import { GlobalStyles } from '../../styles/global-styles';
import { USERS } from '../../constants/users';

const Content = () => {
	const [activeUsers, setActiveUsers] = useState(false);
	const [sortedUsers, setSortedUsers] = useState(0);
	const [searchedUsers, setSearchedUsers] = useState('');

	let filteredUsers = filterByActive(USERS, activeUsers);
	filteredUsers = sortUsers(filteredUsers, sortedUsers);
	filteredUsers = searchUsers(filteredUsers, searchedUsers);

	return (
		<>
			<GlobalStyles />
			<Main>
				<h1>Listado de usuarios</h1>
				<Filters
					activeUsers={activeUsers}
					setActiveUsers={setActiveUsers}
					sortedUsers={sortedUsers}
					setSortedUsers={setSortedUsers}
					searchedUsers={searchedUsers}
					setSearchedUsers={setSearchedUsers}
				/>
				<Users filteredUsers={filteredUsers} />
			</Main>
		</>
	);
};

export default Content;
