import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SkeletonTheme } from 'react-loading-skeleton';
import { ProtectedRoute, ScrollToTop } from './utils/helperFunctions';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import 'react-loading-skeleton/dist/skeleton.css';

function App() {
	const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

	return (
		<SkeletonTheme baseColor="#ddd" highlightColor="#eee">
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					<Route path="/OC-P13-Bank-Front/" element={<Layout />}>
						<Route index element={<Home />} />

						{/* Protected Routes: : */}
						<Route
							element={
								<ProtectedRoute isAllowed={isLoggedIn} redirectPath="/" />
							}
						>
							{/* Can access only when logged in: */}
							<Route path="profile" element={<Profile />} />
						</Route>

						<Route
							element={
								<ProtectedRoute
									isAllowed={!isLoggedIn}
									redirectPath="/profile"
								/>
							}
						>
							{/* Can access only when logged out: */}
							<Route path="login" element={<Login />} />
						</Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</SkeletonTheme>
	);
}

export default App;
