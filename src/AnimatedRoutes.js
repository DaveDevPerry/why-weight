import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Weights from './pages/Weights';
import Settings from './pages/Settings';
import Loader from './pages/Loader';
import Groups from './pages/Groups';
import Group from './pages/Group';
import SignupGroup from './pages/SignupGroup';
import LoginGroup from './pages/LoginGroup';
import Participant from './pages/Participant';
// import GroupsFullDetails from './pages/[slug]';
// import CreateGroup from './pages/CreateGroup';
// import JoinGroup from './pages/JoinGroup';
// import { groupsReducer } from './context/GroupContext';
// import GroupsFullDetails from './pages/groups/[slug]';

const AnimatedRoutes = ({ user, themeToggler, theme }) => {
	// const tempGroupID = '62f5817cdb2d716e19dfaba7';
	const [currentFormOpen, setCurrentFormOpen] = useState('');

	const handleFormChoice = (str) => {
		setCurrentFormOpen(str);
	};
	return (
		<AnimatePresence mode='wait'>
			<Routes>
				{/* <Route path='/' element={<Loader />} /> */}
				<Route
					path='/'
					element={user ? <Loader /> : <Navigate to='/login' />}
					// element={user ? <Home /> : <Navigate to='/login' />}
				/>
				<Route
					path='/login'
					element={!user ? <Login theme={theme} /> : <Navigate to='/' />}
				/>
				<Route
					path='/signup'
					element={!user ? <Signup theme={theme} /> : <Navigate to='/' />}
				/>

				<Route
					path='/home'
					element={user ? <Home /> : <Navigate to='/login' />}
				/>
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
					path='/group'
					element={
						user ? (
							<Group
							// setCurrentFormOpen={setCurrentFormOpen}
							// currentFormOpen={currentFormOpen}
							// handleFormChoice={handleFormChoice}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/participant'
					element={
						user ? (
							<Participant
							// setCurrentFormOpen={setCurrentFormOpen}
							// currentFormOpen={currentFormOpen}
							// handleFormChoice={handleFormChoice}
							/>
						) : (
							<Navigate to='/login' />
						)
					}
				/>
				<Route
					path='/groups/login'
					// element={<LoginGroup />}
					element={user ? <LoginGroup theme={theme} /> : <Navigate to='/' />}
				/>
				<Route
					path='/groups/signup'
					// element={<SignupGroup />}
					element={user ? <SignupGroup theme={theme} /> : <Navigate to='/' />}
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
						path='/groups/new'
						element={
							user ? (
								<CreateGroup
									// setCurrentFormOpen={setCurrentFormOpen}
									// currentFormOpen={currentFormOpen}
									handleFormChoice={handleFormChoice}
								/>
							) : (
								<Navigate to='/login' />
							)
						}
					/>
					<Route
						path='/groups/join'
						element={
							user ? (
								<JoinGroup
									// setCurrentFormOpen={setCurrentFormOpen}
									// currentFormOpen={currentFormOpen}
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
					/> */}
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
			</Routes>
		</AnimatePresence>
	);
};

export default AnimatedRoutes;
