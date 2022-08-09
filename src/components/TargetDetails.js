import { useTargetsContext } from '../hooks/useTargetsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';

const TargetDetails = ({ target }) => {
	const { dispatch } = useTargetsContext();
	const { user } = useAuthContext();

	const handleClick = async () => {
		if (!user) {
			// setError('You must be logged in');
			return;
		}

		const response = await fetch('/api/targets/' + target._id, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: 'DELETE_TARGET', payload: json });
		}
	};

	return (
		<StyledTargetDetails className='target-details'>
			<div>
				<p>
					<strong>{format(new Date(target.createdAt), 'dd/MM/yyyy')}</strong>
				</p>
				<p>
					{formatDistanceToNow(new Date(target.createdAt), { addSuffix: true })}
				</p>
			</div>

			{/* <h4>{format(new Date(weight.createdAt), 'dd/MM/yyyy')}</h4> */}
			{/* <h4>{weight.load}</h4> */}
			<p>
				<strong>{target.target_weight.toFixed(2)} Kgs</strong>
			</p>
			<p>
				<strong>{(target.target_weight * 2.20462).toFixed(2)} Lbs</strong>
			</p>

			<div>
				<p>
					<strong>
						{format(new Date(target.deadline_date), 'dd/MM/yyyy')}
					</strong>
				</p>
				<p>
					{formatDistanceToNow(new Date(target.deadline_date), {
						addSuffix: true,
					})}
				</p>
			</div>
			{/* <p>
				<strong>Reps: </strong>
				{workout.reps}
			</p> */}
			{/* <p>
				{formatDistanceToNow(new Date(weight.createdAt), { addSuffix: true })}
			</p> */}
			<span className='material-symbols-outlined' onClick={handleClick}>
				delete
			</span>
		</StyledTargetDetails>
	);
};
const StyledTargetDetails = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	margin: 10px auto;
	padding: 20px;
	position: relative;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
	column-gap: 4rem;
	p {
		margin: 0;
		font-size: 0.9em;
		color: ${({ theme }) => theme.txtGrey};
	}
	span {
		position: absolute;
		top: 20px;
		right: 20px;
		cursor: pointer;
		background: ${({ theme }) => theme.bgGrey};
		padding: 6px;
		border-radius: 50%;
		color: ${({ theme }) => theme.txtDarkGrey};
	}
`;

export default TargetDetails;
