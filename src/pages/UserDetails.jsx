import { Link, useParams } from 'react-router-dom';
import { USERS } from '../constants/users';

const UserDetails = () => {
	const { userId } = useParams();
	console.log(userId);

	const user = USERS.filter(user => user.userId === userId);

	console.log(user);

	return (
		<>
			<button>
				<Link to={'/'}>Back to Users</Link>
			</button>
			<img src={user[0].profileImage} alt='' />
			<h1>Hi! My name is {user[0].name}</h1>
			<p>Im {user[0].age}</p>
			<p>My username is {user[0].username}</p>
			<p>You can contact me in {user[0].email}</p>
			<p>My address is:</p>
			<p>{user[0].address.street}</p>
			<p>{user[0].address.city}</p>
			<p>{user[0].address.zipCode}</p>
			<p>You can call me at {user[0].phone}</p>
		</>
	);
};

export default UserDetails;
