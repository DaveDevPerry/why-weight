import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import { log } from '../helper';
import { FaUsers } from 'react-icons/fa';
import { useStateContext } from '../lib/context';

// import GroupDetails from './GroupDetails';

const GroupParticipantsList = ({ group }) => {
	const { setParticipantToView } = useStateContext();

	log(group, 'group group participants list');
	return (
		<StyledGroupParticipantsList className='group-participant-list-container'>
			<div className='group-participants-list-header'>
				{/* <p>
					<span>{group && group.title}</span>
				</p> */}
				{/* <p><span>{groupDetailsData.title}</span></p> */}
				<p>
					All Participants
					{/* <span> {groupToView}</span> */}
				</p>
				<div>
					<FaUsers className='nav-icon' />x
					{group && group.all_participants.length}
					{/* {groupDetailsData && groupDetailsData.all_participants.length} */}
				</div>
			</div>
			<ol className='group-participants-list'>
				{group &&
					group.all_participants.map((participant) => (
						<li
							key={participant._id}
							onClick={(e) => {
								e.preventDefault();
								log(participant._id, 'participant id on click');
								setParticipantToView(participant._id);
								// navigate('/group');
							}}
						>
							<p>
								{participant.first_name} {participant.last_name}
							</p>
						</li>
					))}
			</ol>
		</StyledGroupParticipantsList>
	);
};
const StyledGroupParticipantsList = styled.div`
	/* overflow-y: auto; */
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	padding: 1rem;
	flex: 1;
	.group-participants-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		margin-bottom: 0.5rem;
		p {
			color: ${({ theme }) => theme.secondaryColor};
			/* font-weight: bold; */
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
	ol.group-participants-list {
		/* list-style-type: disc; */
		margin-left: 2rem;
		li {
			display: list-item;
			cursor: pointer;
			p {
				text-transform: capitalize;
				pointer-events: none;
			}
		}
	}
`;

export default GroupParticipantsList;
