import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Weights from './pages/Weights';
import Settings from './pages/Settings';
import Loader from './pages/Loader';
import Groups from './pages/Groups';
import GroupsFullDetails from './pages/[slug]';
// import GroupsFullDetails from './pages/groups/[slug]';

const AnimatedRoutes = ({ user, themeToggler, theme }) => {
	const tempGroupID = '62f455dbc21970642118caf3';
	return (
		<>
			<AnimatePresence exitBeforeEnter>
				<Routes>
					<Route path='/' element={<Loader />} />
					<Route
						path='/home'
						element={user ? <Home /> : <Navigate to='/login' />}
					/>
					{/* <Route
						path='/'
						element={user ? <Home /> : <Navigate to='/login' />}
					/> */}
					<Route
						path='/weights'
						element={user ? <Weights /> : <Navigate to='/login' />}
					/>
					<Route
						path='/groups'
						element={user ? <Groups /> : <Navigate to='/login' />}
					/>
					{/* <Route
						path='/groups/:id'
						element={<GroupsFullDetails tempGroupID={tempGroupID} />}
					/> */}
					<Route
						path='/groups/:id'
						element={
							user ? (
								<GroupsFullDetails slug={tempGroupID} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/settings'
						element={
							user ? (
								<Settings themeToggler={themeToggler} theme={theme} />
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					{/* <Route
						path='/settings'
						element={
							user ? (
								<Settings themeToggler={themeToggler} theme={theme} />
							) : (
								<Navigate to='/login' />
							)
						}
					/> */}
					<Route
						path='/login'
						element={!user ? <Login /> : <Navigate to='/' />}
					/>
					<Route
						path='/signup'
						element={!user ? <Signup /> : <Navigate to='/' />}
					/>
				</Routes>
			</AnimatePresence>
		</>
	);
};

export default AnimatedRoutes;
