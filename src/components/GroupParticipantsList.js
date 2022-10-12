import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
// import { log } from '../helper';
import { FaUsers } from 'react-icons/fa';
// import { useStateContext } from '../lib/context';
// import { formatDistanceToNow } from 'date-fns';
// import { format, formatDistanceToNow } from 'date-fns';

// import { ImArrowUp, ImArrowDown } from 'react-icons/im';
// import { CgLoadbar } from 'react-icons/cg';

// import { useNavigate } from 'react-router-dom';
import { useGroupsContext } from '../hooks/useGroupsContext';
import GroupParticipantDetails from './GroupParticipantDetails';
// import { useGroupsContext } from '../hooks/useGroupsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

// import GroupDetails from './GroupDetails';

const GroupParticipantsList = ({ group }) => {
	// const navigate = useNavigate();
	// 	// const { user } = useAuthContext();
	// const { setParticipantToView } = useStateContext();
	const { participants } = useGroupsContext();

	return (
		<StyledGroupParticipantsList className='group-participant-list-container'>
			<div className='group-participants-list-header'>
				<p>All Participants</p>
				<div>
					<FaUsers className='nav-icon' />
					{group && group.all_participants.length}
				</div>
			</div>
			<div className='group-participants-list-container'>
				<ol className='group-participants-list'>
					{group &&
						participants &&
						participants
							.sort((a, b) => {
								return b.weightMovement - a.weightMovement;
							})
							.map((participant) => (
								<GroupParticipantDetails
									key={participant._id}
									// onClick={(e) => {
									// 	e.preventDefault();
									// 	log(participant._id, 'participant id on click');
									// 	setParticipantToView(participant._id);
									// 	navigate('/participant');
									// }}
									participant={participant}
								/>
							))}

					{/* <li
								key={participant._id}
								onClick={(e) => {
									e.preventDefault();
									log(participant._id, 'participant id on click');
									setParticipantToView(participant._id);
									navigate('/participant');
								}}
							>
								<div className='list-item-row'>
									<div className='full'>
										<p>
											{participant.first_name} {participant.last_name}
										</p>
										<p className='font-italic'>
											{formatDistanceToNow(
												new Date(
													participant.weights[
														participant.weights.length - 1
													].createdAt
												),
												{ addSuffix: true }
											)}
										</p>
									
									</div>

									{participant.weightMovement && (
										<div className='wrapper-icon'>
									
											{participant.weightMovement.toFixed(2) < 0 && (
												<ImArrowUp className='arrow-icon red' />
											)}
											{participant.weightMovement.toFixed(2) > 0 && (
												<ImArrowDown className='arrow-icon green' />
											)}
											{participant.weightMovement.toFixed(2) == 0 && (
												<CgLoadbar className='arrow-icon gold' />
											)}
										</div>
									)}

									<div className='weight-figures'>
										<p>
											<strong className='mono-font'>
												{participant.weightMovement.toFixed(2)}
											</strong>{' '}
											Kgs
										</p>
										<p>
											<strong className='mono-font'>
												{(participant.weightMovement * 2.20462).toFixed(2)}
											</strong>{' '}
											Lbs
										</p>
									</div>

								</div>
							</li> */}
				</ol>
			</div>
			{/* <ol className='group-participants-list'>
				{group &&
					participants &&
					participants
						.sort((a, b) => {
							return b.weightMovement - a.weightMovement;
						})
						.map((participant) => (
							<li
								key={participant._id}
								onClick={(e) => {
									e.preventDefault();
									log(participant._id, 'participant id on click');
									setParticipantToView(participant._id);
									navigate('/participant');
								}}
							>
								<div className='list-item-row'>
									<p>
										{participant.first_name} {participant.last_name}
									</p>

									<span className='mono-font'>
										{participant.weightMovement.toFixed(2)}
										Kgs
								
									</span>
									<span className='arrow-wrapper'>
										{participant.weightMovement.toFixed(2) < 0 && (
											<ImArrowUp className='arrow-icon red' />
										)}
										{participant.weightMovement.toFixed(2) > 0 && (
											<ImArrowDown className='arrow-icon green' />
										)}
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
								</div>
							</li>
						))}
			</ol> */}
		</StyledGroupParticipantsList>
	);
};
const StyledGroupParticipantsList = styled.div`
	/* overflow-y: auto; */
	/* background: ${({ theme }) => theme.white}; */
	/* border-radius: 4px; */
	/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
	/* padding: 1rem; */
	/* flex: 1; */
	overflow-y: auto;
	/* flex: 1; */
	display: flex;
	flex-direction: column;
	.group-participants-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5rem;
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
	.group-participants-list-container {
		/* overflow-y: auto; */
		/* flex: 1; */
		overflow-y: auto;
		/* border: 1px solid; */
		scroll-behavior: smooth;
		.group-participants-list {
			display: flex;
			flex-direction: column;
			/* flex: 1; */
			row-gap: 0.3rem;
			/* overflow-y: scroll; */
			/* margin-left: 2rem; */
			padding-left: 2rem;

			/* background-color: ${({ theme }) => theme.secondaryColor}; */
		}
	}
	/* ol.group-participants-list {
		margin-left: 2rem;
		li {
			display: list-item;
			cursor: pointer;
			.list-item-row {
				display: flex;
				align-items: center;
				column-gap: 1rem;
				.full {
					flex: 1;
					p {
						font-size: 1.6rem;
					}
					.font-italic {
						font-style: italic;
					}
				}
				p {
					margin: 0;
					font-size: 0.8em;
					color: ${({ theme }) => theme.txtGrey};
				}
				span {
					display: none;
					position: absolute;
					top: 1.2rem;
					right: 2rem;
					cursor: pointer;
					background: ${({ theme }) => theme.bgGrey};
					padding: 0.6rem;
					border-radius: 50%;
					color: ${({ theme }) => theme.txtDarkGrey};
				}
				.wrapper-icon {
					background: ${({ theme }) => theme.white};
					border-radius: 4px;
					padding: 0px;
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					column-gap: 0.8rem;
					p {
						text-align: right;
						margin: 0;
					}
					p.figure {
						margin: 0;
						font-size: 1rem;
						color: ${({ theme }) => theme.txtGrey};
					}
					.arrow-icon {
						font-size: 2rem;
					}
					.arrow-icon.green {
						color: ${({ theme }) => theme.primaryColor};
					}
					.arrow-icon.red {
						color: ${({ theme }) => theme.error};
					}
					.arrow-icon.gold {
						color: ${({ theme }) => theme.secondaryColor};
					}
				}
			}
		}
	} */
	/* p {
					text-transform: capitalize;
					pointer-events: none;
					flex: 1;
				}
				span {
					font-size: 1.2rem;
					display: flex;
					align-items: center;
					column-gap: 0.3rem;
					.arrow-icon {
						font-size: 1.2rem;
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
	} */
	/* ol.group-participants-list {
		margin-left: 2rem;
		li {
			display: list-item;
			cursor: pointer;
			.list-item-row {
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
					.arrow-icon {
						font-size: 1.2rem;
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
	} */
`;

export default GroupParticipantsList;
