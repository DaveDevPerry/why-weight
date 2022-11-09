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
import AuthVerify from '../common/AuthVerify';
import { useUsersContext } from '../hooks/useUserContext';
// import {
// 	differenceInCalendarDays,
// 	isMonday,
// 	isSunday,
// 	nextMonday,
// } from 'date-fns';
// import { motion } from 'framer-motion';

const Loader = () => {
	const navigate = useNavigate();

	const { dispatch } = useWeightsContext();
	// const { weights, dispatch } = useWeightsContext();
	const { dispatch: targetDispatch } = useTargetsContext();
	// const { weights, dispatch } = useWeightsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { dispatch: groupDispatch } = useGroupsContext();
	const { user } = useAuthContext();
	const { active_user } = useUsersContext();
	// const { setDataLoaded, setDisplayLoader } = useStateContext();
	const {
		setDataLoaded,
		setDisplayLoader,
		setUnitMode,
		setDefaultUnitViewMode,
		// setReminderData,
		// reminderData,
		// dataLoaded,
	} = useStateContext();
	// const { setDataLoaded, setDisplayLoader, getReminderStatus, dataLoaded } =
	// 	useStateContext();

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
			log(json, 'json weights loader');
			// const sortedWeights = json.sort((a, b) => {
			// 	return new Date(b.createdAt) - new Date(a.createdAt);
			// });
			// log(sortedWeights, 'sorted weights loader');
			if (response.ok) {
				dispatch({
					type: 'SET_WEIGHTS',
					// payload: sortedWeights,
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchWeights();
			setTimeout(() => {
				setDataLoaded(true);
				// setFadeOutLoader(true);
				setDisplayLoader(false);
				// navigate('/home');
				// getReminderStatus(weights && weights);

				setTimeout(() => {
					navigate('/home');
				}, 1000);
			}, 1000);
		}
		// setTimeout(() => {
		// 	setDataLoaded(true);
		// 	// setFadeOutLoader(true);
		// 	setDisplayLoader(false);
		// 	// navigate('/home');
		// 	// getReminderStatus(weights && weights);

		// 	setTimeout(() => {
		// 		navigate('/home');
		// 	}, 2000);
		// }, 3000);
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

	useEffect(() => {
		setDefaultUnitViewMode(active_user.defaultMeasurementUnit);
		setUnitMode(active_user.defaultMeasurementUnit);
	}, [user]);

	// ADD PARTICIPANTS

	// const percentage = 20.345;
	// useEffect(() => {
	// 	setTimeout(() => {
	// 		navigate('/home');
	// 	}, 2000);
	// });

	// useEffect(() => {
	// 	const getReminderStatus = () => {
	// 		log(weights, 'weights in context');
	// 		const lastWeightRecord = weights && weights[0];
	// 		// const lastWeightRecord = weights && weights[weights.length - 1];
	// 		// const lastWeight = lastWeightRecord.load;
	// 		// log(lastWeight, 'last weight');
	// 		const lastWeightDate = lastWeightRecord.createdAt;
	// 		log(lastWeightDate, 'lastWeightDate');
	// 		// const currentDay =
	// 		const isTodaySunday = isSunday(new Date());
	// 		log(isTodaySunday, ' isTodaySunday');
	// 		const isTodayMonday = isMonday(new Date());
	// 		log(isTodayMonday, 'isTodayMonday');
	// 		const nextMondayDate = nextMonday(new Date());
	// 		log(nextMondayDate, 'nextMondayDate');

	// 		const daysToNextWeighIn = differenceInCalendarDays(
	// 			new Date(nextMondayDate),
	// 			new Date()
	// 		);

	// 		log(daysToNextWeighIn, 'days to next monday');
	// 		// const daysOverdue =

	// 		if (isTodaySunday === true) {
	// 			log('today is sunday');
	// 			setReminderData({
	// 				...reminderData,
	// 				message: "don't forget to weigh yourself tomorrow",
	// 			});
	// 		}
	// 		if (isTodayMonday === true) {
	// 			log('today is monday');
	// 			setReminderData({
	// 				...reminderData,
	// 				message: "don't forget to weigh yourself today",
	// 			});
	// 		}
	// 	};
	// 	getReminderStatus(weights && weights);
	// }, [dataLoaded, weights]);
	return (
		<StyledLoader
			className='site-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h1>Why Weight?</h1>
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
			<AuthVerify />
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
	background-color: ${({ theme }) => theme.loader};
	/* @include flex(center, center, column); */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	row-gap: 1rem;
	z-index: 500;
	h1 {
		font-size: 2rem;
		/* color: ${({ theme }) => theme.bgGrey}; */
		color: ${({ theme }) => theme.syntax};
		font-family: 'Fuzzy Bubbles', cursive;
	}
	/* dfgf */
	.nav-icon {
		font-size: 10rem;
		/* color: ${({ theme }) => theme.bgGrey}; */
		color: ${({ theme }) => theme.syntax};
	}
	p {
		font-size: 1.4rem;
		/* color: ${({ theme }) => theme.bgGrey}; */
		color: ${({ theme }) => theme.syntax};
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
