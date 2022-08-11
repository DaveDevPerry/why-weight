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
import { useState } from 'react';
// import { groupsReducer } from './context/GroupContext';
// import GroupsFullDetails from './pages/groups/[slug]';

const AnimatedRoutes = ({ user, themeToggler, theme }) => {
	const tempGroupID = '62f5817cdb2d716e19dfaba7';
	const [currentFormOpen, setCurrentFormOpen] = useState('');

	const handleFormChoice = (str) => {
		setCurrentFormOpen(str);
	};
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
						element={
							user ? (
								<Groups
									setCurrentFormOpen={setCurrentFormOpen}
									currentFormOpen={currentFormOpen}
									handleFormChoice={handleFormChoice}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/groups/:id'
						element={<GroupsFullDetails tempGroupID={tempGroupID} />}
					/>
					{/* <Route
						path='/groups/:id'
						element={user ? <GroupsFullDetails /> : <Navigate to='/login' />}
					/> */}
					{/* <Route
						path='/groups/:id'
						element={
							user ? (
								<GroupsFullDetails slug={tempGroupID} />
							) : (
								<Navigate to='/login' />
							)
						}
					/> */}
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
