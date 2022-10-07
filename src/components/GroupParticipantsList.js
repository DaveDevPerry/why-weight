import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import { log } from '../helper';
import { FaUsers } from 'react-icons/fa';
import { useStateContext } from '../lib/context';
import { format } from 'date-fns';

import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
// import { useGroupsContext } from '../hooks/useGroupsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

// import GroupDetails from './GroupDetails';

const GroupParticipantsList = ({ group }) => {
	const navigate = useNavigate();
	// 	// const { user } = useAuthContext();
	const { setParticipantToView } = useStateContext();
	// const { dispatch } = useGroupsContext();

	// 	const getParticipant = async (participantID) => {
	// 		log(participantToView, 'participantToView');
	// 		log(participantToView && participantToView, 'participantToView 2');
	// 		const response = await fetch(
	// 			`${process.env.REACT_APP_BACKEND_URL}/api/user/${participantToView}`

	// 		);

	// 		const json = await response.json();
	// 		log(json, 'json');
	// 		const clonedUser = { ...json };

	// 		log(clonedUser, 'cloned user');

	// 		dispatch({ type: 'SET_PARTICIPANT', payload: clonedUser });

	// 	};

	// log(group, 'group group participants list');
	return (
		<StyledGroupParticipantsList className='group-participant-list-container br'>
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
					<FaUsers className='nav-icon' />
					{group && group.all_participants.length}
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
								// getParticipant(participant._id);
								navigate('/participant');
							}}
						>
							<p>
								{participant.first_name} {participant.last_name}
							</p>
							{/* <span>
								{(
									participant.weights[0].load -
									participant.weights[participant.weights.length - 1].load
								).toFixed(2) < 0 && <ImArrowUp className='arrow-icon red' />}
								{(
									participant.weights[0].load -
									participant.weights[participant.weights.length - 1].load
								).toFixed(2) > 0 && (
									<ImArrowDown className='arrow-icon green' />
								)}
							</span> */}
							<span className='mono-font'>
								{(
									participant.weights[0].load -
									participant.weights[participant.weights.length - 1].load
								).toFixed(2) < 0 && <ImArrowUp className='arrow-icon red' />}
								{(
									participant.weights[0].load -
									participant.weights[participant.weights.length - 1].load
								).toFixed(2) > 0 && (
									<ImArrowDown className='arrow-icon green' />
								)}
								{(
									participant.weights[0].load -
									participant.weights[participant.weights.length - 1].load
								).toFixed(2)}
								Kgs
							</span>
							<span className='mono-font'>
								{format(
									new Date(
										participant.weights[
											participant.weights.length - 1
										].createdAt
									),
									'dd/MM'
								)}
							</span>
						</li>
					))}
			</ol>
			{/* <ol className='group-participants-list'>
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
							<span>
								{(
									participant.weights[0].load -
									participant.weights[participant.weights.length - 1].load
								).toFixed(2)}{' '}
								kgs
							</span>
							<span>
								{format(
									new Date(
										participant.weights[
											participant.weights.length - 1
										].createdAt
									),
									'dd/MM'
								)}
							</span>
						</li>
					))}
			</ol> */}
		</StyledGroupParticipantsList>
	);
};
const StyledGroupParticipantsList = styled.div`
	/* overflow-y: auto; */
	background: ${({ theme }) => theme.white};
	/* border-radius: 4px; */
	/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
	padding: 1rem;
	/* flex: 1; */
	.group-participants-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		margin-bottom: 0.5rem;
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
			font-weight: bold;
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
	}
	ol.group-participants-list {
		/* list-style-type: disc; */
		/* margin-left: 2rem; */
		li {
			/* display: list-item; */
			cursor: pointer;
			display: flex;
			align-items: center;
			column-gap: 1rem;
			p {
				text-transform: capitalize;
				pointer-events: none;
				flex: 1;
			}
			span {
				font-size: 1.2rem;
				display: flex;
				align-items: center;
				column-gap: 0.3rem;

				/* display: grid;
				place-content: center; */
				.arrow-icon {
					font-size: 1rem;
				}
				.arrow-icon.green {
					color: ${({ theme }) => theme.primaryColor};
				}
				.arrow-icon.red {
					color: ${({ theme }) => theme.error};
				}
			}
		}
	}
`;

export default GroupParticipantsList;
