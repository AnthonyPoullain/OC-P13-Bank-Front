import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Signin from './pages/Signin';
import UserDashboard from './pages/UserDashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />
					<Route path="signin" element={<Signin />} />
					<Route path="dashboard" element={<UserDashboard />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
