import { BrowserRouter as Router } from 'react-router-dom';
import Routing from './routes';

import { Header, Footer } from './layout/components';

const isAuthenticated = () => {
	const location = window.location.href;
	return !location.endsWith('/auth');
};

function App() {
	return (
		<>
			<Router>
				{isAuthenticated() ? (
					<>
						<Header />
						<Routing />
						<Footer />
					</>
				) : (
					<>
						<Routing />
					</>
				)}
			</Router>
		</>
	);
}

export default App;
