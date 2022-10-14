// import { useWeightsContext } from '../hooks/useWeightsContext';
// import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';
// import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
// import { Link, useNavigate } from 'react-router-dom';
import { log } from '../helper';
import { useStateContext } from '../lib/context';
import { format } from 'date-fns';

// date fns
// import formatDistanceToNow from 'date-fns/formatDistanceToNow';
// import { format } from 'date-fns';

const GroupDetails = ({ group }) => {
	const { setGroupToView } = useStateContext();

	const navigate = useNavigate();
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
		<StyledGroupDetails
			className='group-details'
			onClick={(e) => {
				e.preventDefault();
				log(group.title, 'group on click');
				setGroupToView(group.title);
				navigate('/group');
			}}
		>
			<div className='full-header'>
				<div className='header-top'>
					<h4>{group.title}</h4>
					<div className='group-participants'>
						<FaUsers className='participants-icon' />
						<p className='figure'>{group && group.all_participants.length}</p>
					</div>
				</div>
				<div className='header-bottom'>
					<p>
						chairperson: {group && group.chairperson_user_id.first_name}{' '}
						{group && group.chairperson_user_id.last_name}{' '}
					</p>
				</div>
			</div>
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
			{/* <Link to={`/groups/${group._id}`} params={{ slug: group._id }}>
					Read more
				</Link> */}
			{/* <Link to={`/groups/${group._id}`}>Read more</Link> */}
			{/* <div className='full-list'>
				{group &&
					group.all_participants.map((item, index) => (
						<p key={index}>
							{item.first_name} {item.last_name}
						</p>
					))}
			</div> */}
		</StyledGroupDetails>
	);
};
const StyledGroupDetails = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0.5rem 0; */
	padding: 0.5rem 1rem;
	/* position: relative; */
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: flex-start;
	/* align-items: flex-start; */
	flex-direction: column;
	row-gap: 1rem;
	cursor: pointer;
	.full-header {
		display: flex;
		/* align-items: flex-start; */
		flex-direction: column;
		flex: 1;
		.header-top {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			flex: 1;
			h4 {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 1.8rem;
				text-transform: capitalize;
			}
			.group-participants {
				display: flex;
				flex-direction: row;
				align-items: center;
				column-gap: 0.5rem;
				.participants-icon {
					color: ${({ theme }) => theme.secondaryColor};
					font-size: 2rem;
				}
				.figure {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 1.8rem;
				}
			}
		}
		.header-bottom {
			p {
				margin: 0;
				font-size: 1.6rem;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: capitalize;
				font-weight: bold;
			}

			/* h3 {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 2rem;
			} */
		}
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
				color: ${({ theme }) => theme.secondaryColor};
			}
			.date-date {
			}
		}
	}
	.full {
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: row;
		column-gap: 1rem;
		flex: 1;
		/* .group-participants {
			display: flex;
			flex-direction: row;
			align-items: center;
			column-gap: 0.5rem;
			.participants-icon {
				color: ${({ theme }) => theme.secondaryColor};
				font-size: 2rem;
			}
			.figure {
				color: ${({ theme }) => theme.txtDarkGrey};
				font-size: 1.8rem;
			}
		} */
		.group-figures {
			width: 8rem;
		}
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
`;

export default GroupDetails;
