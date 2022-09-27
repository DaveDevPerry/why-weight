import { useEffect } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { motion } from 'framer-motion';

// components
import { useGroupsContext } from '../hooks/useGroupsContext';
import InviteWidget from '../components/InviteWidget';
import ParticipantsList from '../components/ParticipantsList';
import GroupHeader from '../components/GroupHeader';
import { useParams } from 'react-router-dom';
import { log } from '../helper';

const GroupsFullDetails = ({ tempGroupID }) => {
	// const GroupsFullDetails = ({ slug, tempGroupID }) => {
	const { group, dispatch } = useGroupsContext();
	const { user } = useAuthContext();

	const { id } = useParams();
	log(id, 'id');
	// log(idString, 'idstring');

	// const tempGroupID = '62f455dbc21970642118caf3';

	// const slug = group._id;

	useEffect(() => {
		const fetchGroup = async () => {
			const response = await fetch(
				// `${process.env.REACT_APP_BACKEND_URL}/api/groups/${slug}`,
				`${process.env.REACT_APP_BACKEND_URL}/api/groups/${id}`,
				// `${process.env.REACT_APP_BACKEND_URL}/api/groups/${tempGroupID}`,
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
					type: 'SET_GROUP',
					payload: json,
				});
				// dispatch({
				// 	type: 'SET_GROUPS',
				// 	payload: json,
				// });
			}
		};
		// if we have a value for the user then fetch the workouts
		// if (user) {
		// fetchGroup();
		// }
		if (user) {
			fetchGroup();
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
	log(group, 'group slug');

	return (
		<StyledGroupsFullDetails
			className='groups-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{group && <GroupHeader group={group} />}
			{group && <ParticipantsList group={group} />}
			{group && <InviteWidget group={group} />}
			{/* {groups && groups.map((group) => <p key={group._id}>{group.title}</p>)} */}
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
		</StyledGroupsFullDetails>
	);
};
const StyledGroupsFullDetails = styled(motion.div)`
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

export default GroupsFullDetails;
