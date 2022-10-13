import { useEffect } from 'react';
import { useWeightsContext } from '../hooks/useWeightsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
// import WeightDetails from '../components/WeightDetails';
// import WeightForm from '../components/WeightForm';
// import TargetForm from '../components/TargetForm';
// import TargetDetails from '../components/TargetDetails';
// import CountdownWidget from '../components/CountdownWidget';
// import ProgressWidget from '../components/ProgressWidget';
import WeightsList from '../components/WeightsList';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
import WeightUnitsWidget from '../components/WeightUnitsWidget';
import { useStateContext } from '../lib/context';
import { useNavigate } from 'react-router-dom';
import NoUserWeightsWidget from '../components/NoUserWeightsWidget';
import { useTargetsContext } from '../hooks/useTargetsContext';
import ProgressWidget from '../components/ProgressWidget';
import NextWeighInReminderWidget from '../components/NextWeightInReminderWidget';
// import WeightConvertor from '../components/WeightConvertor';

const Weights = () => {
	// const [workouts, setWorkouts] = useState(null);
	const { weights, dispatch } = useWeightsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();
	const { targets } = useTargetsContext();

	const { dataLoaded, reminderData } = useStateContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

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
	// useEffect(() => {
	// 	const fetchTargets = async () => {
	// 		const response = await fetch('/api/targets', {
	// 			headers: {
	// 				Authorization: `Bearer ${user.token}`,
	// 			},
	// 		});
	// 		const json = await response.json();

	// 		if (response.ok) {
	// 			// setWorkouts(json);
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

	return (
		<StyledWeights
			className='weights-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <WeightForm /> */}
			{/* <WeightConvertor /> */}
			{/* <WeightUnitsWidget weights={weights} />
			<WeightsProgressWidget weights={weights} />

			<WeightsList weights={weights} /> */}

			{weights && weights.length > 0 ? (
				<>
					{' '}
					{weights && weights.length >= 1 && reminderData.days !== null && (
						<NextWeighInReminderWidget reminderData={reminderData} />
					)}
					{/* {weights && weights.length >= 1 && (
						<NextWeighInReminderWidget reminderData={reminderData} />
					)} */}
					<WeightUnitsWidget weights={weights} />
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
					{/* <WeightConvertor /> */}
					{/* <WeightsProgressWidget weights={weights} /> */}
					<WeightsList weights={weights} />
				</>
			) : (
				<NoUserWeightsWidget
				// setCurrentFormOpen={setCurrentFormOpen}
				// handleFormChoice={handleFormChoice}
				/>
			)}
		</StyledWeights>
	);
};
const StyledWeights = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* justify-content: flex-start; */
	/* overflow-y: hidden; */
	/* overflow-y: hidden; */
	flex: 1;
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	padding: 0.5rem;
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	padding: 0 1rem;
	/* overflow: hidden; */
	z-index: 1;
	overflow-y: auto;
	transition: all 200ms linear;
	margin: 0 auto;
	/* background-color: rgba(0, 0, 0, 0.4); */
	/* background-color: rgba(241, 241, 241, 0.9); */
	/* scroll-behavior: smooth;
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
	} */
`;

export default Weights;
