// import { useparticipantsContext } from '../hooks/useparticipantsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
// import { ImArrowUp, ImArrowDown } from 'react-icons/im';

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { format } from 'date-fns';

const ParticipantCard = ({ participant }) => {
	// const { dispatch } = useparticipantsContext();
	// const { user } = useAuthContext();

	// const handleClick = async () => {
	// 	if (!user) {
	// 		// setError('You must be logged in');
	// 		return;
	// 	}

	// 	const response = await fetch('/api/participants/' + participant._id, {
	// 		method: 'DELETE',
	// 		headers: {
	// 			Authorization: `Bearer ${user.token}`,
	// 		},
	// 	});
	// 	const json = await response.json();

	// 	if (response.ok) {
	// 		dispatch({ type: 'DELETE_participant', payload: json });
	// 	}
	// };

	return (
		<StyledParticipantCard className='participant-details'>
			<div className='full'>
				<p>
					<strong>{participant}</strong>
				</p>
				{/* <p>
					{formatDistanceToNow(new Date(participant.createdAt), {
						addSuffix: true,
					})}
				</p> */}
			</div>
			{/* <div className='full'>
				<p>
					<strong>{format(new Date(participant.createdAt), 'dd/MM/yyyy')}</strong>
				</p>
				<p>
					{formatDistanceToNow(new Date(participant.createdAt), { addSuffix: true })}
				</p>
			</div> */}
			{/* {difference && (
				<div className='wrapper-icon'>
					<div>
						<p className='figure'>{difference}</p>
						<p className='figure'>{(difference * 2.20462).toFixed(2)}</p>
					</div>
					{difference > 0 && <ImArrowUp className='arrow-icon red' />}
					{difference < 0 && <ImArrowDown className='arrow-icon green' />}
				</div>
			)} */}
			{/* <div className='wrapper-icon'>
				<div>
					<p className='figure'>{difference}</p>
					<p className='figure'>{(difference * 2.20462).toFixed(2)}</p>
				</div>
				{difference > 0 && <ImArrowUp className='arrow-icon red' />}
				{difference < 0 && <ImArrowDown className='arrow-icon green' />}
			</div> */}
			{/* <div className='wrapper-icon'>
				<p className='figure'>
					{difference}
				</p>
				{difference > 0 && <ImArrowUp className='arrow-icon red' />}
				{difference < 0 && <ImArrowDown className='arrow-icon green' />}
				<p className='figure'>
					{(difference * 2.20462).toFixed(2)}
				</p>
			</div> */}

			{/* <h4>{format(new Date(participant.createdAt), 'dd/MM/yyyy')}</h4> */}
			{/* <h4>{participant.load}</h4> */}
			{/* <div className='participant-figures'>
				<p>
					<strong>{participant.load.toFixed(2)} Kgs</strong>
				</p>
				<p>
					<strong>{(participant.load * 2.20462).toFixed(2)} Lbs</strong>
				</p>
			</div> */}
			{/* <p>
				<strong>Reps: </strong>
				{workout.reps}
			</p> */}
			{/* <p>
				{formatDistanceToNow(new Date(participant.createdAt), { addSuffix: true })}
			</p> */}
			{/* <span className='material-symbols-outlined' onClick={handleClick}>
				delete
			</span> */}
		</StyledParticipantCard>
	);
};
const StyledParticipantCard = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0.5rem 0; */
	padding: 0.5rem 1rem;
	position: relative;
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
	.full {
		flex: 1;
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
		/* width: 100px; */
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
		/* p.stat-name {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
			} */
	}
	.participant-figures {
		width: 8rem;
	}
`;

export default ParticipantCard;
