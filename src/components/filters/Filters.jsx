import { StyledCheckboxContainer, StyledFiltersContainer } from './styles';

const Filters = ({
	activeUsers,
	setActiveUsers,
	setSortedUsers,
	setSearchedUsers
}) => {
	return (
		<StyledFiltersContainer>
			<input
				type='text'
				onChange={event => handleSearch(event, setSearchedUsers)}
			/>
			<StyledCheckboxContainer>
				<p>Sólo activos</p>
				<input
					type='checkbox'
					onClick={() => handleActive(activeUsers, setActiveUsers)}
				/>
			</StyledCheckboxContainer>
			<select onChange={event => handleSorted(event, setSortedUsers)}>
				<option value='0'>Por Defecto</option>
				<option value='1'>Por Nombre</option>
			</select>
		</StyledFiltersContainer>
	);
};

export const searchUsers = (filteredUsers, searchedUsers) => {
	const search = searchedUsers.toLowerCase();
	if (searchedUsers)
		return filteredUsers.filter(user =>
			user.name.toLowerCase().includes(search)
		);
	return [...filteredUsers];
};

const handleSearch = (event, setSearchedUsers) => {
	const text = event.target.value;
	setSearchedUsers(text);
};

export const sortUsers = (filteredUsers, sortedUsers) => {
	if (sortedUsers === 1)
		return filteredUsers.sort((a, b) => a.name.localeCompare(b.name));
	return [...filteredUsers];
};

const handleSorted = (event, setSortedUsers) => {
	const selectedValue = event.target.value;
	setSortedUsers(Number(selectedValue));
};

export const filterByActive = (users, activeUsers) => {
	if (activeUsers) return users.filter(user => user.active);
	return [...users];
};

const handleActive = (activeUsers, setActiveUsers) => {
	setActiveUsers(!activeUsers);
};

export default Filters;
