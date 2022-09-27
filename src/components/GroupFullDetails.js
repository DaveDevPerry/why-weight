import { useEffect } from 'react';
// import { useWeightsContext } from '../hooks/useWeightsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components

// import WeightsList from '../components/WeightsList';
// import WeightsProgressWidget from '../components/WeightsProgressWidget';
// import WeightUnitsWidget from '../components/WeightUnitsWidget';
import { useGroupsContext } from '../hooks/useGroupsContext';
// import GroupForm from '../components/GroupForm';
// import GroupDetails from '../components/GroupDetails';
// import GroupsList from '../components/GroupsList';
// import WeightConvertor from '../components/WeightConvertor';

const Groups = () => {
	// const [workouts, setWorkouts] = useState(null);
	// const { weights, dispatch } = useWeightsContext();
	const { groups, dispatch } = useGroupsContext();
	// const { targets, dispatch: targetDispatch } = useTargetsContext();
	const { user } = useAuthContext();

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

			if (response.ok) {
				// setWorkouts(json);
				dispatch({
					type: 'SET_GROUPS',
					payload: json,
				});
			}
		};
		// if we have a value for the user then fetch the workouts
		if (user) {
			fetchGroups();
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
		<StyledGroupFullDetails
			className='groups-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			group full details
			{/* <GroupForm /> */}
			{/* {groups && <p>{groups[0].title}</p>} */}
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget weights={weights} /> */}
			{/* <WeightConvertor /> */}
			{/* <WeightsProgressWidget weights={weights} /> */}
			{/* {groups &&
				groups.map((group) => {
					return <GroupDetails key={group._id} group={group} />;
				})} */}
			{/* <GroupsList groups={groups} /> */}
			{/* <WeightsList weights={weights} /> */}
		</StyledGroupFullDetails>
	);
};
const StyledGroupFullDetails = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	/* flex: 1; */
	/* overflow-y: auto; */
	/* border: 2px solid red; */
`;

export default Groups;

// import React from 'react';
// import { useParams } from 'react-router-dom';
// import useFetch from '../hooks/useFetch';
// export default function GroupFullDetails() {
// 	const { id } = useParams();
// 	const { loading, error, data } = useFetch(
// 		'http://localhost:1337/reviews/' + id
// 	);

// 	log(data);

// 	if (loading) return <p>Loading...</p>;
// 	if (error) return <p>Error...</p>;
// 	return (
// 		<div className='review-card'>
// 			<div className='rating'>{data.rating}</div>
// 			<h2>{data.title}</h2>

// 			<small>console list</small>

// 			<p>{data.body}</p>
// 		</div>
// 	);
// }
