import { useEffect } from 'react';
import { useWeightsContext } from '../hooks/useWeightsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useTargetsContext } from '../hooks/useTargetsContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { isMobile } from 'react-device-detect';

// components
// import WeightDetails from '../components/WeightDetails';
// import WeightForm from '../components/WeightForm';
// import TargetForm from '../components/TargetForm';
// import TargetDetails from '../components/TargetDetails';
// import CountdownWidget from '../components/CountdownWidget';
import ProgressWidget from '../components/ProgressWidget';
import ChartWidget from '../components/ChartWidget';
import ProgressBarWidget from '../components/ProgressBarWidget';
import TargetForm from '../components/TargetForm';
import ShareWidget from '../components/ShareWidget';
// import { useGroupsContext } from '../hooks/useGroupsContext';
// import { log } from '../helper';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../lib/context';
import WeightFormInitial from '../components/WeightFormInitial';
import WeightGoalsWidget from '../components/WeightGoalsWidget';
import NextWeighInReminderWidget from '../components/NextWeightInReminderWidget';
import { log } from '../helper';
import {
	differenceInCalendarDays,
	isMonday,
	isSunday,
	nextMonday,
} from 'date-fns';
// import TargetCountdownWidget from '../components/TargetCountdownWidget';
// import TargetForm from '../components/TargetForm';
// import WeightsList from '../components/WeightsList';

const Home = () => {
	const { weights } = useWeightsContext();
	const { targets } = useTargetsContext();
	// const { dispatch: groupDispatch } = useGroupsContext();
	// const { user } = useAuthContext();
	// const { dataLoaded, isFormActive, setIsFormActive } = useStateContext();
	// const { dataLoaded, isFormActive, setIsFormActive, getReminderStatus } =
	// 	useStateContext();
	const {
		// setDataLoaded,
		// setDisplayLoader,
		setReminderData,
		reminderData,
		dataLoaded,
	} = useStateContext();
	const { isFormActive, setIsFormActive } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
		if (isMobile) {
			log('is mobile');

			// log(
			// 	`whatsapp://send?text=I have set up a group on Why Wait? Would you like to join? Create an account here - https://why-weight.vercel.app/signup and go to groups - join group and enter these details - GROUP NAME:${groupName}, PIN:${groupPin}.`
			// );

			// window.open(
			// 	`whatsapp://send?text=I have set up a group on Why Wait? Would you like to join? Create an account here - https://why-weight.vercel.app/signup and go to groups - join group and enter these details - GROUP NAME:${groupName}, PIN:${groupPin}.`
			// );
		} else {
			log('is not mobile');
		}
		// getReminderStatus(weights);
	}, [navigate, dataLoaded]);

	useEffect(() => {
		const getReminderStatus = () => {
			if (weights && weights.length >= 1) {
				log(weights, 'weights in context');
				const clonedWeights = [...weights];
				// const lastWeightRecord = weights && weights[0];
				const lastWeightRecord =
					clonedWeights && clonedWeights[clonedWeights.length - 1];
				const lastWeight = clonedWeights && lastWeightRecord.load;
				log(lastWeight, 'last weight');
				const lastWeightDate = lastWeightRecord.createdAt;
				log(lastWeightDate, 'lastWeightDate');
				// const currentDay =
				const isTodaySunday = isSunday(new Date());
				log(isTodaySunday, ' isTodaySunday');
				const isTodayMonday = isMonday(new Date());
				log(isTodayMonday, 'isTodayMonday');
				const nextMondayDate = nextMonday(new Date());
				log(nextMondayDate, 'nextMondayDate');

				const daysToNextWeighIn = differenceInCalendarDays(
					new Date(nextMondayDate),
					new Date()
				);

				log(daysToNextWeighIn, 'days to next monday');
				// const daysOverdue =

				const daysSinceLastWeighIn = differenceInCalendarDays(
					new Date(),
					new Date(lastWeightDate)
				);
				log(daysSinceLastWeighIn, 'days since last weigh in');

				if (daysSinceLastWeighIn >= 8) {
					log(daysSinceLastWeighIn, 'daysSinceLastWeighIn');
					setReminderData({
						...reminderData,
						message: `you haven't weighed yourself for ${daysSinceLastWeighIn} days now. Don't give up!`,
					});
					return;
				}
				if (isTodaySunday === true) {
					log('today is sunday');
					setReminderData({
						...reminderData,
						message: "don't forget to weigh yourself tomorrow",
					});
					return;
				}
				if (isTodayMonday === true) {
					log('today is monday');
					setReminderData({
						...reminderData,
						message: "don't forget to weigh yourself today",
					});
					return;
				}

				setReminderData({
					...reminderData,
					days: null,
					message: null,
				});
				// setReminderData({
				// 	...reminderData,
				// 	days: `${daysToNextWeighIn} days`,
				// 	message: `until your next weigh in!`,
				// });
			}
		};
		getReminderStatus(weights && weights);
	}, [dataLoaded, weights]);
	// const { weights, dispatch } = useWeightsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	// const { dispatch: groupDispatch } = useGroupsContext();
	// const { user } = useAuthContext();

	// useEffect(() => {
	// 	const fetchWeights = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/weights`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			dispatch({
	// 				type: 'SET_WEIGHTS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchWeights();
	// 	}
	// }, [dispatch, user]);
	// useEffect(() => {
	// 	const fetchTargets = async () => {
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
	// 			targetDispatch({
	// 				type: 'SET_TARGETS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchTargets();
	// 	}
	// }, [targetDispatch, user]);

	// useEffect(() => {
	// 	const fetchGroups = async () => {
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/groups`,
	// 			{
	// 				headers: {
	// 					Authorization: `Bearer ${user.token}`,
	// 				},
	// 			}
	// 		);
	// 		const json = await response.json();
	// 		log(json, 'json');
	// 		log(user, 'user fetch groups home');
	// 		if (response.ok) {
	// 			// setWorkouts(json);
	// 			groupDispatch({
	// 				type: 'SET_GROUPS',
	// 				payload: json,
	// 			});
	// 		}
	// 	};
	// 	// if we have a value for the user then fetch the workouts
	// 	if (user) {
	// 		fetchGroups();
	// 	}
	// }, [groupDispatch, user]);

	const percentage = 20.345;

	return (
		<StyledHome
			className='home'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <TargetForm /> */}
			{weights && weights.length >= 1 && reminderData.days !== null && (
				<NextWeighInReminderWidget reminderData={reminderData} />
			)}

			{weights && weights.length === 0 && (
				<div className='initial-card-wrapper'>
					{/* <br /> */}
					<p className='instruction-title'>
						1. Enter your current weight in kilograms
					</p>
					<WeightFormInitial
						isFormActive={isFormActive}
						setIsFormActive={setIsFormActive}
					/>
				</div>
			)}
			{targets && targets.length === 0 && (
				<div className='initial-card-wrapper mt'>
					{/* <br /> */}
					<p className='instruction-title'>
						2. Set your initial weight loss target
					</p>
					<TargetForm />
				</div>
			)}
			{/* {weights && weights.length === 0 && (
				<>
					<br />
					<p className='instruction-title'>
						2. Enter your current weight in kilograms
					</p>
					<WeightForm
						isFormActive={isFormActive}
						setIsFormActive={setIsFormActive}
					/>
				</>
			)} */}
			{targets && targets.length === 1 && weights && weights.length >= 1 && (
				<>
					{/* {targets &&
						targets.map((target) => (
							<CountdownWidget key={target._id} target={target} />
						))} */}
					{/* {targets &&
						targets.map((target) => (
							<TargetCountdownWidget
								key={target._id}
								target={target}
								isNextDayCountdownActive={true}
							/>
						))} */}
					{targets && weights && (
						<ProgressBarWidget
							percentage={percentage}
							targets={targets}
							weights={weights}
						/>
					)}
					{targets &&
						weights &&
						weights.length > 1 &&
						targets.map((target) => (
							<ProgressWidget
								key={target._id}
								target={target}
								weights={weights}
							/>
						))}
					{targets && weights && weights.length > 1 && (
						<ChartWidget targets={targets} weights={weights} />
					)}
					{targets &&
						weights &&
						targets.map((target) => (
							<WeightGoalsWidget
								key={target._id}
								target={target}
								weights={weights}
							/>
						))}

					{isMobile && (
						<>
							{targets && weights && weights.length > 1 && (
								<ShareWidget targets={targets} weights={weights} />
							)}
						</>
					)}
					{/* {isMobile ? (
						<>
							{targets && weights && weights.length > 1 && (
								<ShareWidget targets={targets} weights={weights} />
							)}
						</>
					) : (
						<p>not a mobile device</p>
					)} */}

					{/* {targets && weights && weights.length > 1 && (
						<ShareWidget targets={targets} weights={weights} />
					)} */}
					{/* {targets && weights && (
						<ProgressBarWidget
							percentage={percentage}
							targets={targets}
							weights={weights}
						/>
					)} */}
					{/* {targets && weights && weights.length > 1 && (
						<ChartWidget targets={targets} weights={weights} />
					)} */}
				</>
			)}
			{/* {targets &&
				targets.map((target) => (
					<CountdownWidget key={target._id} target={target} />
				))}

			{targets &&
				weights &&
				targets.map((target) => (
					<ProgressWidget key={target._id} target={target} weights={weights} />
				))}
			{targets && weights && (
				<ProgressBarWidget
					percentage={percentage}
					targets={targets}
					weights={weights}
				/>
			)}
			{targets && weights && (
				<ChartWidget targets={targets} weights={weights} />
			)} */}
		</StyledHome>
	);
};
const StyledHome = styled(motion.div)`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	row-gap: 1rem;
	/* padding: 0.5rem; */
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	padding: 0.5rem 1rem;
	overflow-y: auto;
	/* overflow-y: scroll; */
	/* overflow: hidden; */
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	/* background-color: rgba(0, 0, 0, 0.4); */
	/* background-color: rgba(241, 241, 241, 0.9); */
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.primaryColor};
	::-webkit-scrollbar {
		width: 5px;
		background: rgb(75, 74, 74);
		user-select: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}
	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}
	.initial-card-wrapper {
		.instruction-title {
			color: ${({ theme }) => theme.secondaryColor};
			/* font-weight: bold; */
			padding: 00.5rem;
			/* font-size */
		}
		&.mt {
			margin-top: 2rem;
		}
	}
`;

export default Home;
