import { useState } from 'react';
import { useGroupsContext } from '../hooks/useGroupsContext';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { log } from '../helper';

const GroupJoinForm = () => {
	const { groups, dispatch } = useGroupsContext();
	const { user } = useAuthContext();

	// const [newWeight, setNewWeight] = useState('');
	const [joinTitle, setJoinTitle] = useState('');
	const [joinPin, setJoinPin] = useState('');
	// const [deadline_reason, setDeadline_reason] = useState('');

	// const [reps, setReps] = useState('');
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!user) {
			setError('You must be logged in');
			return;
		}
		const group = { joinTitle, joinPin };
		log(group, 'group in join after submit');

		const clonedGroups = [...groups];
		const groupValid = clonedGroups.filter((obj) => {
			return obj.title === joinTitle && obj.pin === joinPin;
		});

		log(groupValid, 'group valid');
		log(groupValid[0]._id, 'group valid id');

		log(user, 'user valid');
		// };
		// search for group in db with matching name and pin and return

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/groups/${groupValid[0]._id}`,
			// {
			// 	method: 'GET',
			// 	headers: {
			// 		'Content-Type': 'application/json',
			// 		Authorization: `Bearer ${user.token}`,
			// 	},
			// }
			{
				method: 'PATCH',
				// body: user.userId,
				// body: all_participants.push(user.userId),
				body: JSON.stringify(group),
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${user.token}`,
				},
			}
		);
		const json = await response.json();

		log(json, 'json join form');

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			// setNewWeight('');
			setJoinTitle('');
			setJoinPin('');
			// setDeadline_reason('');
			// setReps('');
			setError(null);
			setEmptyFields([]);

			log(json, 'json join form ok');
			// console.log('new target added', json);
			dispatch({ type: 'UPDATE_GROUP', payload: json });
		}
	};

	// const handleClose = () => {
	// 	// navigate('/home');
	// 	setIsFormActive(!isFormActive);
	// };

	return (
		<StyledForm className='create' onSubmit={handleSubmit}>
			<h3>
				Join A Group
				{/* <CgCloseR className='close-icon' onClick={handleClose} /> */}
			</h3>

			<div className='input-wrapper'>
				<label>Group Name:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setJoinTitle(e.target.value)}
					value={joinTitle}
					// className={emptyFields.includes('title') ? 'error' : ''}
					autoFocus
				/>
			</div>
			{/* <div className='input-wrapper'>
				<label>Group PIN:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setDeadline_reason(e.target.value)}
					value={deadline_reason}
					className={emptyFields.includes('deadline_reason') ? 'error' : ''}
				/>
			</div> */}
			<div className='input-wrapper'>
				<label>Group PIN:</label>
				<input
					type='text'
					id='input-number'
					onChange={(e) => setJoinPin(e.target.value)}
					value={joinPin}
					// className={emptyFields.includes('pin') ? 'error' : ''}
				/>
			</div>
			<button>JOIN GROUP</button>
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

export default GroupJoinForm;
