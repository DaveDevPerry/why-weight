import { useState } from 'react';
import { useUsersContext } from '../hooks/useUserContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { useEffect } from 'react';

const UserForm = () => {
	const { dispatch } = useUsersContext();
	// const { active_user, dispatch } = useUsersContext();
	const { user } = useAuthContext();

	// const [newWeight, setNewWeight] = useState('');
	const [first_name, setFirst_name] = useState('');
	const [last_name, setLast_name] = useState('');
	// const [name, setFirst_name] = useState('');
	// const [reps, setReps] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	console.log(user, 'user in user form 1');

	useEffect(() => {
		// search users
		// console.log(active_user, 'active user form');
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}
		const newUserFields = { first_name, last_name };
		console.log(newUserFields, 'new user fields');
		const userId = user.userId;

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/user/${userId}`,
			// `${process.env.REACT_APP_BACKEND_URL}/api/user/62f2f3463d7a73511caca8c4`,
			// `${process.env.REACT_APP_BACKEND_URL}/api/users`,
			{
				method: 'PATCH',
				body: JSON.stringify(newUserFields),
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
			setFirst_name('');
			setLast_name('');
			setError(null);
			setEmptyFields([]);
			console.log('new user added', json);
			dispatch({ type: 'UPDATE_USER', payload: json });
		}
	};
	console.log(user, 'user in user form');
	// console.log(req.body,)

	return (
		<StyledForm className='create' onSubmit={handleSubmit}>
			<h3>Update User</h3>

			{/* <div className='input-wrapper'>
				<label>
					Desired weight
					<br />
					(in kg):
				</label>
				<input
					type='number'
					id='input-number'
					onChange={(e) => setFirst_name(e.target.value)}
					value={name}
					className={emptyFields.includes('name') ? 'error' : ''}
				/>
			</div> */}
			<div className='input-wrapper'>
				<label>first name:</label>
				<input
					type='text'
					// id='input-number'
					onChange={(e) => setFirst_name(e.target.value)}
					value={first_name}
					className={emptyFields.includes('first_name') ? 'error' : ''}
				/>
			</div>
			<div className='input-wrapper'>
				<label>last name:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setLast_name(e.target.value)}
					value={last_name}
					className={emptyFields.includes('last_name') ? 'error' : ''}
				/>
			</div>
			<button>Update User</button>
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

export default UserForm;
