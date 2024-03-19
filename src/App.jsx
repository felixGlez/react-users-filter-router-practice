import { GlobalStyles } from './styles/global-styles';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<GlobalStyles />
				<Router />
			</BrowserRouter>
		</>
	);
};

export default App;
