import { useState } from 'react';
import Filters, {
	filterByActive,
	searchUsers,
	sortUsers
} from './components/filters/Filters';
import Main from './components/main/Main';
import Users from './components/users/Users';
import { GlobalStyles } from './styles/global-styles';
import { USERS } from './constants/users';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

const App = () => {
	const [activeUsers, setActiveUsers] = useState(false);
	const [sortedUsers, setSortedUsers] = useState(0);
	const [searchedUsers, setSearchedUsers] = useState('');

	let filteredUsers = filterByActive(USERS, activeUsers);
	filteredUsers = sortUsers(filteredUsers, sortedUsers);
	filteredUsers = searchUsers(filteredUsers, searchedUsers);

	return (
		<>
			<BrowserRouter>
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
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
