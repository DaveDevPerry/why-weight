// import { useWeightsContext } from '../hooks/useWeightsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { CgLoadbar } from 'react-icons/cg';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { format } from 'date-fns';
import { useStateContext } from '../lib/context';
// import { useGroupsContext } from '../hooks/useGroupsContext';
import { useNavigate } from 'react-router-dom';
import { log } from '../helper';

const GroupParticipantDetails = ({ participant, difference }) => {
	const navigate = useNavigate();
	// 	// const { user } = useAuthContext();
	const { setParticipantToView } = useStateContext();
	// const { participants } = useGroupsContext();

	log(participant, 'participant');
	log(participant.weightMovement, 'participant weight movement');

	return (
		<StyledGroupParticipantDetails
			className='group-participant-details'
			// key={participant._id}
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
								participant.weights[participant.weights.length - 1].createdAt
							),
							{ addSuffix: true }
						)}
					</p>
				</div>

				{participant.weightMovement && participant.weights.length > 1 ? (
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
				) : (
					<div className='wrapper-icon'>
						<CgLoadbar className='arrow-icon gold' />
					</div>
				)}

				{participant.weightMovement && participant.weights.length > 1 ? (
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
				) : (
					<div className='weight-figures'>
						{/* <p>
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
						</p> */}
					</div>
				)}
			</div>
		</StyledGroupParticipantDetails>
	);
};
const StyledGroupParticipantDetails = styled.li`
	display: list-item;
	cursor: pointer;
	/* &::before {
		color: #fcd000;
		font-size: 1.5rem;
		font-weight: bold;

	} */
	&::marker {
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bolder;
	}
	.list-item-row {
		display: flex;
		align-items: center;
		column-gap: 1rem;
		.full {
			flex: 1;
			p {
				font-size: 1.6rem;
				font-weight: bold;
				text-transform: capitalize;
				&.font-italic {
					font-style: italic;
					font-size: 1.2rem;
					font-weight: unset;
					text-transform: unset;
				}
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
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	padding: 0.2rem 0.5rem;
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05);
	/* display: flex; */
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
	/* .full {
		flex: 1;
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
	.weight-figures {
		width: 7.5rem;
		text-align: left;
	} */
`;

export default GroupParticipantDetails;
