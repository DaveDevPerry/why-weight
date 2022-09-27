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

const Group = () => {
	const { user } = useAuthContext();
	const { group, dispatch } = useGroupsContext();
	const { groupToView } = useStateContext();
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

			const groupData = json.filter((obj) => obj.title === groupToView);

			if (response.ok) {
				// setGroupDetailsData(groupData[0]);
				// log(groupData, 'group data - Group');
				dispatch({
					type: 'SET_GROUP',
					payload: groupData,
				});
				// log(groupData, 'res ok band data');
				// log(sortedByDate, 'res ok sorted band data');
			}
		};
		if (user) {
			fetchGroup();
		}
	}, [groupToView, dispatch, user]);

	// log(groupDetailsData, 'group details data - Group');

	return (
		<StyledGroup
			className='band-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			{/* <div>Band {band._id}</div>
			<div>Band {band.name}</div> */}
			{/* <p>band page</p> */}
			<div className='full-header'>
				<h3>{group && group.title}</h3>
				<p>
					chairperson: {group && group.chairperson_user_id.first_name}{' '}
					{group && group.chairperson_user_id.last_name}{' '}
				</p>
			</div>

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
			<GroupParticipantsList group={group && group} />

			<InviteWidget group={group} />
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
	flex: 1;
	max-width: 42rem;
	/* padding: 0 1rem; */
	overflow: hidden;
	overflow-y: auto;
	transition: all 200ms linear;
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.primaryColor};
	::-webkit-scrollbar {
		/* height: 12px !important; */
		width: 5px;
		background: rgb(75, 74, 74);
		user-select: none; /* supported by Chrome and Opera */
		-webkit-user-select: none; /* Safari */
		-khtml-user-select: none; /* Konqueror HTML */
		-moz-user-select: none; /* Firefox */
		-ms-user-select: none; /* Internet Explorer/Edge */
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}
	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	}
	.full-header {
		background: ${({ theme }) => theme.white};
		border-radius: 4px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
		display: flex;

		align-items: center;
		flex-direction: column;
		flex: 1;
		padding: 1rem;
		h3 {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 2rem;
		}
		p {
			margin: 0;
			font-size: 1.6rem;
			color: ${({ theme }) => theme.txtGrey};
			text-transform: capitalize;
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
