import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoScale } from 'react-icons/io5';
import { useWeightsContext } from '../hooks/useWeightsContext';
import { useTargetsContext } from '../hooks/useTargetsContext';
import { useGroupsContext } from '../hooks/useGroupsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { log } from '../helper';
import { useStateContext } from '../lib/context';
// import { motion } from 'framer-motion';

const Loader = () => {
	const navigate = useNavigate();

	const { dispatch } = useWeightsContext();
	const { dispatch: targetDispatch } = useTargetsContext();
	// const { weights, dispatch } = useWeightsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { dispatch: groupDispatch } = useGroupsContext();
	const { user } = useAuthContext();
	const { setDataLoaded, setDisplayLoader } = useStateContext();

	useEffect(() => {
		const fetchWeights = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/weights`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			if (response.ok) {
				dispatch({
					type: 'SET_WEIGHTS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchWeights();
		}
		setTimeout(() => {
			setDataLoaded(true);
			// setFadeOutLoader(true);
			setDisplayLoader(false);
			// navigate('/home');

			setTimeout(() => {
				navigate('/home');
			}, 2000);
		}, 3000);
	}, [dispatch, user]);

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
				targetDispatch({
					type: 'SET_TARGETS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchTargets();
		}
	}, [targetDispatch, user]);

	useEffect(() => {
		const fetchGroups = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/groups`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			log(json, 'json');
			log(user, 'user fetch groups home');
			if (response.ok) {
				// setWorkouts(json);
				groupDispatch({
					type: 'SET_GROUPS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGroups();
		}
	}, [groupDispatch, user]);

	// const percentage = 20.345;
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		navigate('/home');
	// 	}, 2000);
	// });
	return (
		<StyledLoader
			className='site-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h1>Why Wait?</h1>
			<IoScale className='nav-icon' />
			<p>© daveperry.tech 2022</p>
			{/* <div className='scale-wrapper'>
				<div className='base'>
					<div className='screen'>
						<div className='dial'></div>
					</div>
					<div className='pad'></div>
				</div>
			</div> */}
		</StyledLoader>
	);
};
const StyledLoader = styled(motion.section)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.secondaryColor};
	/* @include flex(center, center, column); */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 1rem;
	z-index: 500;
	h1 {
		font-size: 2rem;
		color: ${({ theme }) => theme.bgGrey};
	}
	.nav-icon {
		font-size: 10rem;
		color: ${({ theme }) => theme.bgGrey};
	}
	p {
		font-size: 1.4rem;
		color: ${({ theme }) => theme.bgGrey};
	}

	/* .scale-wrapper {

		height: 20rem;
		width: 20rem;
		.base {
			border-radius: 1rem;
			background-color: ${({ theme }) => theme.white};
			height: 100%;
			width: 100%;
			padding: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 2rem;
			.screen {
				border: 1px solid ${({ theme }) => theme.txtGrey};
				background-color: ${({ theme }) => theme.bgGrey};
				border-radius: 1rem;
				width: 8rem;
				height: 4rem;
			}
			.pad {
				border: 1px solid ${({ theme }) => theme.txtGrey};
				border-radius: 2rem;
				width: 100%;
				flex: 1;
				background-color: ${({ theme }) => theme.bgGrey};
			}
		}
	} */
`;

export default Loader;
