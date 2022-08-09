import { useState } from 'react';
import { useTargetsContext } from '../hooks/useTargetsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';

const TargetForm = () => {
	const { dispatch } = useTargetsContext();
	const { user } = useAuthContext();

	// const [newWeight, setNewWeight] = useState('');
	const [target_weight, setTarget_weight] = useState('');
	const [deadline_date, setDeadline_date] = useState('');
	// const [reps, setReps] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}
		const target = { target_weight, deadline_date };

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/targets`,
			{
				// const response = await fetch('/api/targets', {
				method: 'POST',
				body: JSON.stringify(target),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			// setNewWeight('');
			setTarget_weight('');
			setDeadline_date('');
			// setReps('');
			setError(null);
			setEmptyFields([]);
			// console.log('new target added', json);
			dispatch({ type: 'CREATE_TARGET', payload: json });
		}
	};
	// gffg
	return (
		<StyledForm className='create' onSubmit={handleSubmit}>
			<h3>Set Targets</h3>

			<div className='input-wrapper'>
				<label>Weight (in kg):</label>
				<input
					type='number'
					id='input-number'
					onChange={(e) => setTarget_weight(e.target.value)}
					value={target_weight}
					className={emptyFields.includes('target_weight') ? 'error' : ''}
				/>
			</div>
			<div className='input-wrapper'>
				<label>Deadline:</label>
				<input
					type='date'
					id='input-number'
					onChange={(e) => setDeadline_date(e.target.value)}
					value={deadline_date}
					className={emptyFields.includes('deadline_date') ? 'error' : ''}
				/>
			</div>
			<button>Add Target</button>
			{error && <div className='error'>{error}</div>}
		</StyledForm>
	);
};
const StyledForm = styled.form`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem 2rem 2rem 2rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 1rem;
	p.form-title {
		padding: 0 2rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 0.9em;
		text-align: center;
		margin-top: 1rem;
	}
	h3 {
		text-align: center;
		margin: 0;
	}
	.input-wrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
		column-gap: 1rem;
		label {
			font-size: 0.9em;
			text-align: right;
			flex: 1;
		}
		#input-number {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.txtGrey};
			flex: 1;
		}
	}
`;

export default TargetForm;
