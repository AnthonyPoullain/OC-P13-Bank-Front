import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ProtectedRoute, ScrollToTop } from './utils/helperFunctions';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';

function App() {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Home />} />

					{/* Protected Routes: : */}
					<Route
						element={<ProtectedRoute isAllowed={isLoggedIn} redirectPath="/" />}
					>
						{/* Can access only when logged in: */}
						<Route path="profile" element={<Profile />} />
					</Route>

					<Route
						element={
							<ProtectedRoute isAllowed={!isLoggedIn} redirectPath="/profile" />
						}
					>
						{/* Can access only when logged out: */}
						<Route path="login" element={<Login />} />
					</Route>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
