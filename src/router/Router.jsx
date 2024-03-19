import { Route, Routes } from 'react-router-dom';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<p>hola</p>} />
			<Route path='/:userId' element={<p>adios</p>} />
		</Routes>
	);
};

export default Router;
