import { useEffect } from 'react';
import { useWeightsContext } from '../hooks/useWeightsContext';
// import { useAuthContext } from '../hooks/useAuthContext';
import { useTargetsContext } from '../hooks/useTargetsContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
// import WeightDetails from '../components/WeightDetails';
// import WeightForm from '../components/WeightForm';
// import TargetForm from '../components/TargetForm';
// import TargetDetails from '../components/TargetDetails';
import CountdownWidget from '../components/CountdownWidget';
// import ProgressWidget from '../components/ProgressWidget';
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
// import TargetCountdownWidget from '../components/TargetCountdownWidget';
// import TargetForm from '../components/TargetForm';
// import WeightsList from '../components/WeightsList';

const Home = () => {
	const { weights } = useWeightsContext();
	const { targets } = useTargetsContext();
	// const { dispatch: groupDispatch } = useGroupsContext();
	// const { user } = useAuthContext();
	const { dataLoaded, isFormActive, setIsFormActive } = useStateContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);
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

			{weights && weights.length === 0 && (
				<>
					<br />
					<p className='instruction-title'>
						1. Enter your current weight in kilograms
					</p>
					<WeightFormInitial
						isFormActive={isFormActive}
						setIsFormActive={setIsFormActive}
					/>
				</>
			)}

			{targets && targets.length === 0 && (
				<>
					<br />
					<p className='instruction-title'>
						2. Set your initial weight loss target
					</p>
					<TargetForm />
				</>
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
					{targets &&
						targets.map((target) => (
							<CountdownWidget key={target._id} target={target} />
						))}
					{/* {targets &&
						targets.map((target) => (
							<TargetCountdownWidget
								key={target._id}
								target={target}
								isNextDayCountdownActive={true}
							/>
						))} */}

					{targets &&
						weights &&
						targets.map((target) => (
							<WeightGoalsWidget
								key={target._id}
								target={target}
								weights={weights}
							/>
						))}
					{/* {targets &&
						weights &&
						weights.length > 1 &&
						targets.map((target) => (
							<ProgressWidget
								key={target._id}
								target={target}
								weights={weights}
							/>
						))} */}
					{targets && weights && weights.length > 1 && (
						<ShareWidget targets={targets} weights={weights} />
					)}
					{targets && weights && (
						<ProgressBarWidget
							percentage={percentage}
							targets={targets}
							weights={weights}
						/>
					)}
					{targets && weights && weights.length > 1 && (
						<ChartWidget targets={targets} weights={weights} />
					)}
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
	row-gap: 1rem;
	.instruction-title {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
	}
`;

export default Home;
