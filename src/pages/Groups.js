import { useEffect } from 'react';
// import { useEffect, useState } from 'react';
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
import GroupsList from '../components/GroupsList';
import GroupFormChoiceLinks from '../components/GroupFormChoiceLinks';
import { log } from '../helper';
// import WeightConvertor from '../components/WeightConvertor';

const Groups = ({ setCurrentFormOpen, currentFormOpen, handleFormChoice }) => {
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

			log(json, 'json fetch groups');
			log(user.userId, 'user id');

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

	// const [currentFormOpen, setCurrentFormOpen] = useState('');
	log(groups, 'groups');

	return (
		<StyledGroups
			className='groups-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<GroupFormChoiceLinks
				setCurrentFormOpen={setCurrentFormOpen}
				handleFormChoice={handleFormChoice}
			/>
			{/* {currentFormOpen === 'create' && <GroupForm />}
			{currentFormOpen === 'join' && <p>join form</p>} */}
			{/* {groups && <p>{groups[0].title}</p>} */}
			{/* <WeightForm /> */}
			{/* <WeightUnitsWidget weights={weights} /> */}
			{/* <WeightConvertor /> */}
			{/* <WeightsProgressWidget weights={weights} /> */}
			{/* {groups &&
				groups.map((group) => {
					return <GroupDetails key={group._id} group={group} />;
				})} */}
			<GroupsList groups={groups} />
			{/* <WeightsList weights={weights} /> */}
		</StyledGroups>
	);
};
const StyledGroups = styled(motion.div)`
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