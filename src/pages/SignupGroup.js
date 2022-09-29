import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
// import { useSignup } from '../hooks/useSignup';
import { useSignupGroup } from '../hooks/useSignupGroup';
import { useAuthContext } from '../hooks/useAuthContext';
import { log } from '../helper';
// import { Link } from 'react-router-dom';
// import { useGroupsContext } from '../hooks/useGroupsContext';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useStateContext } from '../lib/context';
// import { useStateContext } from '../lib/context';

const SignupGroup = () => {
	const [title, setTitle] = useState('');
	const [pin, setPin] = useState('');
	const [target_date, setTarget_date] = useState('');
	const [target_reason, setTarget_reason] = useState('');
	const { signup, isLoading, error } = useSignupGroup();
	const { user } = useAuthContext();

	const { dataLoaded } = useStateContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);
	// const { dispatch } = useGroupsContext();
	// const { setGroupToView } = useStateContext();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userID = user.userId;
		log(userID, 'userID signupGroup');
		// const userID = user._id;

		await signup(title, pin, userID, target_date, target_reason);

		log('after creating a group');

		notify(title);

		// setGroupToView(title);
		// navigate('/group');

		// navigate('')
		// const fetchGroup = async () => {
		// 	const response = await fetch(
		// 		`${process.env.REACT_APP_BACKEND_URL}/api/groups`,
		// 		{
		// 			headers: {
		// 				Authorization: `Bearer ${user.token}`,
		// 			},
		// 		}
		// 	);
		// 	const json = await response.json();

		// 	log(json, 'json fetch group');

		// 	const groupData = json.filter((obj) => obj.title === title);

		// 	if (response.ok) {
		// 		// setGroupDetailsData(groupData[0]);
		// 		// log(groupData, 'group data - Group');
		// 		dispatch({
		// 			type: 'SET_GROUP',
		// 			payload: groupData,
		// 		});
		// 		// log(groupData, 'res ok band data');
		// 		// log(sortedByDate, 'res ok sorted band data');
		// 	}
		// };
		// if (user) {
		// 	fetchGroup();
		setTimeout(() => {
			navigate('/');
		}, 3000);
		// }
	};

	// create a toast
	const notify = (title) => {
		toast.success(`${title} group has been successfully created.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<StyledSignupGroup
			className='signup-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<form onSubmit={handleSubmit} className='signup'>
				<h3>Create a group</h3>
				<div>
					<label>group name:</label>
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						autoComplete='off'
					/>
				</div>
				<div>
					<label>group pin:</label>
					<input
						type='password'
						onChange={(e) => setPin(e.target.value)}
						value={pin}
						autoComplete='off'
					/>
				</div>

				<div>
					<label>target date:</label>
					<input
						type='date'
						onChange={(e) => setTarget_date(e.target.value)}
						value={target_date}
						autoComplete='off'
					/>
				</div>
				<div>
					<label>Reason / Event:</label>
					<input
						type='text'
						// id='input-number'
						onChange={(e) => setTarget_reason(e.target.value)}
						value={target_reason}
						// className={emptyFields.includes('deadline_reason') ? 'error' : ''}
					/>
				</div>

				<button disabled={isLoading}>create group</button>
				{error && <div className='error'>{error}</div>}
			</form>

			<p>
				been invited to join a group? Join<Link to='/groups/login'> here</Link>
			</p>
		</StyledSignupGroup>
	);
};
const StyledSignupGroup = styled(motion.div)`
	.signup {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		background: ${({ theme }) => theme.white};
		border-radius: 4px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
		h3 {
			text-align: center;
			margin: 0;
			color: ${({ theme }) => theme.txtDarkGrey};
		}
		input {
			padding: 0.8rem 1rem;
			margin: 0;
			font-size: 1.8rem;
			color: ${({ theme }) => theme.txtGrey};
			flex: 1;
			&:focus {
				outline: none;
				border: none;
				border: 2px solid ${({ theme }) => theme.primaryColor};
				border-radius: 4px;
				box-sizing: border-box;
			}
		}
	}
	p {
		text-align: center;
		a {
			color: ${({ theme }) => theme.secondaryColor};
			text-decoration: none;
		}
	}
`;

export default SignupGroup;
