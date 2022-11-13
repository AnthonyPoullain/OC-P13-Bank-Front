import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './utils/helperFunctions';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Signin from './pages/Signin/Signin';
import UserDashboard from './pages/UserDashboard/UserDashboard';

function App() {
	return (
		<BrowserRouter>
			<ScrollToTop />
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
