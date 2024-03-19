import { Route, Routes } from 'react-router-dom';
import Content from '../components/content/Content';
import UserDetails from '../pages/UserDetails';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Content />} />
			<Route path='/:userId' element={<UserDetails />} />
		</Routes>
	);
};

export default Router;
