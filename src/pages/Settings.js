import React from 'react';
import { useTargetsContext } from '../hooks/useTargetsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import Toggle from '../components/Toggler';
import Navbar from '../components/Navbar';
import TargetForm from '../components/TargetForm';
// import { CgCloseR } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import UserForm from '../components/UserForm';
import { log } from '../helper';
import { useStateContext } from '../lib/context';
// import UserDefaultMeasurementUnit from '../components/UserDefaultMeasurementUnit';
import TargetWidget from '../components/TargetWidget';
// import UserForm from '../components/UserForm';
// import AppDetails from '../components/AppDetails';
import toast from 'react-hot-toast';
import { useLogout } from '../hooks/useLogout';
import UserPreferences from '../components/UserPreferences';

const Settings = ({ themeToggler, theme }) => {
	const { logout } = useLogout();
	const { targets, dispatch } = useTargetsContext();
	const { user } = useAuthContext();
	const { dataLoaded } = useStateContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	const handleClick = () => {
		logout();
		notify();
	};

	// create a toast
	const notify = () => {
		toast.success(`you are now logged out.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	useEffect(() => {
		const fetchTargets = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/targets`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_TARGETS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchTargets();
		}
	}, [dispatch, user]);

	// useEffect(() => {
	// 	const fetchUser = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/targets`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			dispatch({
	// 				type: 'SET_TARGETS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchUser();
	// 	}
	// }, [dispatch, user]);

	// const handleClose = () => {
	// 	navigate('/home');
	// };
	log(targets, 'targets');
	return (
		<StyledSettings
			className='settings-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='wrapper br'>
				<h3>
					Settings
					{/* <CgCloseR className='close-icon' onClick={handleClose} /> */}
				</h3>

				<Navbar targets={targets} />

				{targets && targets.length === 1 && <TargetWidget targets={targets} />}
				<UserPreferences toggleTheme={themeToggler} theme={theme} />
				{/* <Toggle toggleTheme={themeToggler} theme={theme} />
				<UserDefaultMeasurementUnit theme={theme} /> */}
				{!targets && <TargetForm />}
				{!user.first_name && <UserForm />}
				{/* {targets && targets.length === 0 && <TargetForm />} */}
				{/* <UserForm /> */}
				{/* <a href='https://www.daveperry.tech' className='developer-link'>
					developed by © daveperry.tech 2022
				</a> */}
				<div className='btn-container'>
					<button onClick={handleClick}>Log out</button>
				</div>
			</div>
			{/* <TargetWidget targets={targets} /> */}
			{/* <AppDetails theme={theme} /> */}
		</StyledSettings>
	);
};
const StyledSettings = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	flex: 1;
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	/* padding: 0.5rem; */
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	padding: 0.5rem 1rem;
	overflow-y: auto;
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	/* display: flex;
	flex-direction: column;
	justify-content: space-between;
	row-gap: 1rem;
	padding: 2rem;
	background: ${({ theme }) => theme.white};
	transition: all 200ms linear;
	flex: 1;
	height: --webkit-fill-available;
	transition: all 200ms linear;
	margin: 0 auto; */
	.wrapper {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		row-gap: 1rem;
		padding: 1rem 2rem;
		background: ${({ theme }) => theme.white};
		/* border-radius: 4px; */
		/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
		transition: all 200ms linear;
		flex: 1;
		/* height: --webkit-fill-available; */
		transition: all 200ms linear;
		/* margin: 0 auto; */
		.btn-container {
			border-top: 1px solid ${({ theme }) => theme.secondaryColor};
			margin-top: 1rem;
			width: 100%;
			padding: 1rem 0rem;
			text-align: right;
			button {
				align-self: flex-end;
				background: ${({ theme }) => theme.white};
				color: ${({ theme }) => theme.secondaryColor};
				border: 2px solid ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.primaryColor};
			border: 2px solid ${({ theme }) => theme.primaryColor}; */
				padding: 0.3rem 0.6rem;
				border-radius: 0.4rem;
				font-family: 'Poppins';
				cursor: pointer;
				font-size: 1em;
			}
		}
	}
	h3 {
		text-align: center;
		position: relative;
		color: ${({ theme }) => theme.secondaryColor};
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.txtDarkGrey};
		}
	}
	a.developer-link {
		text-decoration: none;
		align-self: center;
		margin-top: 6rem;
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtDarkGrey};
		/* flex: 1; */
		justify-self: flex-end;
		/* height: 100%; */
	}
`;

export default Settings;
