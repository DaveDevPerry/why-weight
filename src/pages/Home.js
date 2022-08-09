import { useEffect } from 'react';
import { useWeightsContext } from '../hooks/useWeightsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useTargetsContext } from '../hooks/useTargetsContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
// import WeightDetails from '../components/WeightDetails';
// import WeightForm from '../components/WeightForm';
// import TargetForm from '../components/TargetForm';
// import TargetDetails from '../components/TargetDetails';
import CountdownWidget from '../components/CountdownWidget';
import ProgressWidget from '../components/ProgressWidget';
import ChartWidget from '../components/ChartWidget';
import ProgressBarWidget from '../components/ProgressBarWidget';
// import WeightsList from '../components/WeightsList';

const Home = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { weights, dispatch } = useWeightsContext();
	const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

	useEffect(() => {
		const fetchWeights = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/weights`,
				{
					// const response = await fetch('/api/weights', {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
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
	}, [dispatch, user]);
	useEffect(() => {
		const fetchTargets = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/targets`,
				{
					// const response = await fetch('/api/targets', {
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();

			if (response.ok) {
				// setWorkouts(json);
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
			{targets &&
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
			)}
			{/* <div className='weights'> */}
			{/* {targets &&
				weights &&
				targets.map((target) => (
					<ProgressWidget key={target._id} target={target} weights={weights} />
				))} */}

			{/* <WeightsList weights={weights} /> */}
			{/* <div className='weight-list-container'>
				<p className='weights-list'>Recorded weigh-ins</p>
				{weights &&
					weights.map((weight) => (
						<WeightDetails key={weight._id} weight={weight} />
					))}
			</div> */}

			{/* </div> */}
			{/* <div> */}
			{/* {targets &&
					targets.map((target) => (
						<CountdownWidget key={target._id} target={target} />
					))} */}
			{/* <WeightForm /> */}
			{/* <TargetForm /> */}
			{/* </div> */}
		</StyledHome>
	);
};
const StyledHome = styled(motion.div)`
	/* display: grid;
	grid-template-columns: 3fr 1fr;
	gap: 20px; */
	/* border: 3px solid green; */
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* z-index: -2; */
	/* .weight-list-container {
		display: flex;
		flex-direction: column;
		row-gap: 0.3rem;
		p.weights-list {
			padding: 0 1rem;
			border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
			margin-bottom: 0.5rem;
			font-size: 0.9em;
		}
	} */
`;

export default Home;
