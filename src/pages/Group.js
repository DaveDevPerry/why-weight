import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import BandGigsList from '../components/BandGigsList';
// import { FaUsers } from 'react-icons/fa';
import { log } from '../helper';
import { useGroupsContext } from '../hooks/useGroupsContext';
import InviteWidget from '../components/InviteWidget';
import GroupParticipantsList from '../components/GroupParticipantsList';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { isMobile } from 'react-device-detect';

const Group = () => {
	const { user } = useAuthContext();
	const { group, dispatch } = useGroupsContext();
	const { groupToView } = useStateContext();

	const { dataLoaded } = useStateContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);
	// const { groupToView, setGroupDetailsData, groupDetailsData } =
	// 	useStateContext();

	useEffect(() => {
		log(groupToView, ' group in group');

		const fetchGroup = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/groups`,
				{
					headers: {
						Authorization: `Bearer ${user.token}`,
					},
				}
			);
			const json = await response.json();
			const clonedForGroup = [...json];
			const groupData = clonedForGroup.filter(
				(obj) => obj.title === groupToView
			);

			const clonedForParticipants = [...json];
			const groupPartData = clonedForParticipants.filter(
				(obj) => obj.title === groupToView
			);
			const clonedGroup = [...groupPartData];
			log(clonedGroup, 'cloned group');
			const clonedParticipants = [...clonedGroup[0].all_participants];
			log(clonedParticipants, 'cloned Participants');

			const getGroupWeights = clonedParticipants.map((participant) => {
				const weights = participant.weights
					// .sort((a, b) => {
					// 	return new Date(b.createdAt) > new Date(a.createdAt);
					// })
					.filter((weight) => {
						// log(new Date(weight.createdAt), 'created at');
						// log(new Date(groupData[0].createdAt), 'created at group');
						return (
							new Date(weight.createdAt) > new Date(groupData[0].createdAt)
						);
					})
					.sort((a, b) => {
						return new Date(a.createdAt) - new Date(b.createdAt);
					});
				const weightMovement =
					weights[0].load.toFixed(2) -
					weights[weights.length - 1].load.toFixed(2);

				return { ...participant, weights, weightMovement };
			});

			log(getGroupWeights, ' get group weights');
			// filter weight dates after group start date
			// 	const groupWeights = clonedWeights
			// 	.sort((a, b) => {
			// 		return new Date(b.createdAt) > new Date(a.createdAt);
			// 	})
			// 	.filter((weight) => {
			// 		log(new Date(weight.createdAt), 'created at');
			// 		log(new Date(group.createdAt), 'created at group');
			// 		return new Date(weight.createdAt) > new Date(group.createdAt);
			// 	});
			// log(clonedUser, 'cloned user');
			// log(clonedWeights, 'cloned user weights');
			// log(groupWeights, 'groupWeights user weights');

			// clonedUser.weights = groupWeights;
			// log(clonedWeights, 'cloned user weights');

			// log(clonedUser, 'cloned user new');

			// const weightMovement =
			// 	groupWeights[0].load.toFixed(2) -
			// 	groupWeights[groupWeights.length - 1].load.toFixed(2);
			// log(weightMovement, 'weightMovement');
			// log(parseInt(weightMovement), 'weightMovement');
			// log(Number(weightMovement).toFixed(2), 'weightMovement');

			// clonedUser.weightMovement = weightMovement;

			// log(clonedUser, 'cloned user new');

			// const compileParticipantsData = () => {
			// 	const clonedGroup = [...group]
			// 	const clonedParticipants = [...clonedGroup.allParticipants]

			// }

			if (response.ok) {
				// setGroupDetailsData(groupData[0]);
				// log(groupData, 'group data - Group');
				dispatch({
					type: 'SET_GROUP',
					payload: groupData[0],
				});
				dispatch({
					type: 'SET_PARTICIPANTS',
					payload: getGroupWeights,
				});
				// log(groupData, 'res ok band data');
				// log(sortedByDate, 'res ok sorted band data');
			}
		};
		if (user) {
			fetchGroup();
		}
	}, [groupToView, dispatch, user]);

	log(
		group && group.chairperson_user_id,
		user && user.userId,
		'check for match'
	);

	// log(groupDetailsData, 'group details data - Group');

	return (
		<StyledGroup
			className='group-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{isMobile ? (
				<>
					{group && group.chairperson_user_id._id === user.userId ? (
						<InviteWidget group={group} />
					) : (
						<p className='dev-red br'>
							note for developers - user !chairperson so invite widget not
							displayed
						</p>
					)}
				</>
			) : (
				<p>not a mobile device</p>
			)}

			{/* <div>Band {band._id}</div>
			<div>Band {band.name}</div> */}
			{/* <p>band page</p> */}
			<div className='full-header br'>
				<h3>{group && group.title}</h3>
				<p>
					chairperson: {group && group.chairperson_user_id.first_name}{' '}
					{group && group.chairperson_user_id.last_name}{' '}
				</p>
			</div>
			{group && (
				<div className='full-dates br'>
					{/* <h3>{group && group.title}</h3> */}
					<div className='group-details-dates-container'>
						<div className='dates-wrapper'>
							<p className='date-text'>start date:</p>
							<p className='date-date'>
								{format(new Date(group.createdAt), 'dd/MM/yyyy')}
							</p>
						</div>
						<div className='dates-wrapper'>
							<p className='date-text'>goal date:</p>
							<p className='date-date'>
								{format(new Date(group.target_date), 'dd/MM/yyyy')}
							</p>
						</div>
					</div>
					<div className='bottom-wrapper'>
						<p>reason / event:</p>
						<p>{group && group.target_reason}</p>
					</div>
				</div>
			)}

			{/* <div className='group-participants-list-header'>
				<p>
					All Participants
				</p>
				<div>
					<FaUsers className='nav-icon' />x
					{group && group.all_participants.length}
				</div>
			</div>
			<ul className='group-participants-list'>
				{group &&
					group.all_participants.map((participant) => (
						<li key={participant._id}>
							<p>
								{participant.first_name} {participant.last_name}
							</p>
						</li>
					))}
			</ul> */}
			{group && group && <GroupParticipantsList group={group && group} />}

			{/* {isMobile ? (
				<>
					{group && group.chairperson_user_id._id === user.userId ? (
						<InviteWidget group={group} />
					) : (
						<p className='dev-red br'>
							note for developers - user !chairperson so invite widget not
							displayed
						</p>
					)}
				</>
			) : (
				<p>not a mobile device</p>
			)} */}

			{/* {group && group.chairperson_user_id._id === user.userId ? (
				<InviteWidget group={group} />
			) : (
				<p className='dev-red br'>
					note for developers - user !chairperson so invite widget not displayed
				</p>
			)} */}

			{/* </div> */}
			{/* <div> */}
			{/* {groupDetailsData && <BandGigsList gigs={groupDetailsData} />} */}
			{/* </div> */}
			{/* <div>
				{groupDetailsData &&
					groupDetailsData.map((gig, index) => {
						return (
							<li key={index}>
								{gig.gig_date} - {gig.venue} - {gig.city}
							</li>
						);
					})}
			</div> */}
		</StyledGroup>
	);
};
const StyledGroup = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* justify-content: flex-start; */
	/* overflow-y: auto; */
	/* overflow-y: hidden; */
	flex: 1;
	/* overflow-y: auto; */
	/* border: 2px solid red; */
	padding: 0.5rem;
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	padding: 0 1rem;
	overflow: hidden;
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	/* display: flex;
	flex-direction: column;
	row-gap: 1rem;
	flex: 1;
	max-width: 42rem;
	padding: 0.5rem;
	overflow: hidden;
	overflow-y: auto;
	transition: all 200ms linear;
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
	} */
	.full-header {
		background: ${({ theme }) => theme.white};
		/* border-radius: 4px; */
		/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
		display: flex;

		align-items: center;
		flex-direction: column;
		/* flex: 1; */
		padding: 1rem;
		h3 {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 2rem;
			text-transform: capitalize;
		}

		.group-details-dates-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			column-gap: 1rem;
			flex: 1;
			.dates-wrapper {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				/* flex-direction: column; */
				flex-wrap: wrap;
				gap: 0.5rem;
				/* flex: 1; */
				.date-text {
					font-size: 1.4rem;
				}
				.date-date {
				}
			}
		}
		p {
			margin: 0;
			font-size: 1.6rem;
			color: ${({ theme }) => theme.txtGrey};
			text-transform: capitalize;
			font-weight: bold;
		}
	}
	.full-dates {
		background: ${({ theme }) => theme.white};
		/* border-radius: 4px; */
		/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
		display: flex;

		/* align-items: center; */
		flex-direction: column;
		row-gap: 0.5rem;
		/* flex: 1; */
		padding: 1rem;
		h3 {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 2rem;
			text-transform: capitalize;
		}

		.group-details-dates-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			column-gap: 1rem;
			flex: 1;
			.dates-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				flex-wrap: wrap;
				/* gap: 0.5rem; */
				flex: 1;
				.date-text {
					font-size: 1.4rem;
					color: ${({ theme }) => theme.secondaryColor};
				}
				.date-date {
				}
			}
		}
		.bottom-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			border-top: 1px solid grey;
			padding-top: 0.5rem;
			p {
				margin: 0;
				font-size: 1.6rem;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: capitalize;
				&:first-of-type {
					color: ${({ theme }) => theme.secondaryColor};
					font-size: 1.4rem;
				}
			}
		}
	}

	/* .band-gigs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
			span {
				text-transform: capitalize;
			}
		}
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
		}
	}
	ul.group-participants-list {
		list-style-type: disc;
		li {
			display: inline-block;
		}
	} */
`;

export default Group;
