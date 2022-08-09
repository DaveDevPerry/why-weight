import { useState } from 'react';
import { useWeightsContext } from '../hooks/useWeightsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { motion } from 'framer-motion';

const WeightForm = ({ isFormActive, setIsFormActive }) => {
	const { dispatch } = useWeightsContext();
	const { user } = useAuthContext();

	// const [newWeight, setNewWeight] = useState('');
	const [load, setLoad] = useState('');
	// const [reps, setReps] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}
		const weight = { load };

		const response = await fetch('/api/weights', {
			method: 'POST',
			body: JSON.stringify(weight),
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${user.token}`,
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			// setNewWeight('');
			setLoad('');
			// setReps('');
			setError(null);
			setEmptyFields([]);
			console.log('new weight added', json);
			dispatch({ type: 'CREATE_WEIGHT', payload: json });
		}
		setIsFormActive(!isFormActive);
	};

	return (
		<StyledForm
			className='create'
			onSubmit={handleSubmit}
			// initial={{ height: 0 }}
			// 			animate={{ height: '80%' }}
		>
			<h3>Add current Weight</h3>

			<div className='input-wrapper'>
				<label>Weight (in kg):</label>
				<input
					type='number'
					id='input-number'
					onChange={(e) => setLoad(e.target.value)}
					value={load}
					className={emptyFields.includes('load') ? 'error' : ''}
					autoFocus
				/>
			</div>

			<button>Add Weight</button>
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

export default WeightForm;
