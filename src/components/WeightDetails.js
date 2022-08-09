import { useWeightsContext } from '../hooks/useWeightsContext';
import { useAuthContext } from '../hooks/useAuthContext';

import styled from 'styled-components';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { format } from 'date-fns';

const WeightDetails = ({ weight }) => {
	const { dispatch } = useWeightsContext();
	const { user } = useAuthContext();

	const handleClick = async () => {
		if (!user) {
			// setError('You must be logged in');
			return;
		}

		const response = await fetch('/api/weights/' + weight._id, {
			method: 'DELETE',
			headers: {
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (response.ok) {
			dispatch({ type: 'DELETE_WEIGHT', payload: json });
		}
	};

	return (
		<StyledWeightDetails className='weight-details'>
			<div>
				<p>
					<strong>{format(new Date(weight.createdAt), 'dd/MM/yyyy')}</strong>
				</p>
				<p>
					{formatDistanceToNow(new Date(weight.createdAt), { addSuffix: true })}
				</p>
			</div>

			{/* <h4>{format(new Date(weight.createdAt), 'dd/MM/yyyy')}</h4> */}
			{/* <h4>{weight.load}</h4> */}
			<div>
				<p>
					<strong>{weight.load.toFixed(2)} Kgs</strong>
				</p>
				<p>
					<strong>{(weight.load * 2.20462).toFixed(2)} Lbs</strong>
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
		</StyledWeightDetails>
	);
};
const StyledWeightDetails = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0.5rem 0; */
	padding: 1rem;
	position: relative;
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05);
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	/* column-gap: 4rem; */
	p {
		margin: 0;
		font-size: 0.9em;
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
`;

export default WeightDetails;
