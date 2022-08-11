// import { useWeightsContext } from '../hooks/useWeightsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
// import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { format } from 'date-fns';

const GroupDetails = ({ group }) => {
	// const { dispatch } = useWeightsContext();
	// const { user } = useAuthContext();

	// const handleClick = async () => {
	// 	if (!user) {
	// 		// setError('You must be logged in');
	// 		return;
	// 	}

	// 	const response = await fetch('/api/weights/' + weight._id, {
	// 		method: 'DELETE',
	// 		headers: {
	// 			Authorization: `Bearer ${user.token}`,
	// 		},
	// 	});
	// 	const json = await response.json();

	// 	if (response.ok) {
	// 		dispatch({ type: 'DELETE_WEIGHT', payload: json });
	// 	}
	// };

	return (
		<StyledGroupDetails className='group-details'>
			<div className='full'>
				<p>
					<strong>{group.title}</strong>
				</p>
				<p>{group.chairperson_user_id}</p>
				<Link to={`/groups/${group._id}`}>Read more</Link>
			</div>
			<div className='group-participants'>
				<FaUsers className='participants-icon' />
				<p className='figure'>5</p>
				{/* <p className='figure'>{group.participants.length}</p> */}
			</div>
			{/* <div className='full'>
				<p>
					<strong>{format(new Date(group.createdAt), 'dd/MM/yyyy')}</strong>
				</p>
				<p>
					{formatDistanceToNow(new Date(group.createdAt), { addSuffix: true })}
				</p>
			</div>
			<div className='group-figures'>
				<p className='figure'>{group.title}</p>
				<p className='figure'>{group.pin}</p>
			</div> */}
			{/* <p>
				<strong>Reps: </strong>
				{workout.reps}
			</p> */}
			{/* <p>
				{formatDistanceToNow(new Date(weight.createdAt), { addSuffix: true })}
			</p> */}
			{/* <span className='material-symbols-outlined' onClick={handleClick}>
				delete
			</span> */}
		</StyledGroupDetails>
	);
};
const StyledGroupDetails = styled.div`
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
		text-transform: capitalize;
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
	.group-participants {
		display: flex;
		flex-direction: row;
		align-items: center;
		column-gap: 0.5rem;
		.participants-icon {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 2.2rem;
		}
		.figure {
			color: ${({ theme }) => theme.txtDarkGrey};
			font-size: 1.8rem;
		}
	}
	.group-figures {
		width: 8rem;
	}
`;

export default GroupDetails;
