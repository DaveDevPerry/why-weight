import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLoginGroup } from '../hooks/useLoginGroup';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import { log } from '../helper';
import toast from 'react-hot-toast';
import { useStateContext } from '../lib/context';

const LoginGroup = () => {
	// const navigate = useNavigate();

	const [title, setTitle] = useState('');
	const [pin, setPin] = useState('');
	const { login, error, isLoading } = useLoginGroup();
	const { user } = useAuthContext();

	const { dataLoaded } = useStateContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const userID = user.userId;
		log(userID, 'userID loginGroup');

		await login(title, pin, userID);

		notify(title);

		setTimeout(() => {
			navigate('/');
		}, 3000);
	};

	// create a toast
	const notify = (title) => {
		toast.success(`you have successfully joined ${title}.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<StyledLogin
			className='login-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<form onSubmit={handleSubmit} className='login br'>
				<h3>Join a group</h3>
				<div>
					<label>group name:</label>
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						autoComplete='current-title'
					/>
				</div>
				<div>
					<label>group pin:</label>
					<input
						type='password'
						onChange={(e) => setPin(e.target.value)}
						value={pin}
						autoComplete='current-pin'
					/>
				</div>
				<button disabled={isLoading}>Join group</button>
				{error && <div className='error'>{error}</div>}
			</form>

			<p>
				create a group<Link to='/groups/signup'> here</Link>
			</p>
		</StyledLogin>
	);
};
const StyledLogin = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* padding: 0.5rem; */
	padding: 0.5rem 1rem;
	max-width: 100rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	/* padding: 0 1rem; */
	/* overflow-y: scroll; */
	/* overflow: hidden; */
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	.login {
		display: flex;
		flex-direction: column;
		row-gap: 1rem;
		padding: 2rem;
		background: ${({ theme }) => theme.white};
		/* border-radius: 4px; */
		/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
		h3 {
			text-align: center;
			margin: 0;
			color: ${({ theme }) => theme.txtDarkGrey};
		}
		label {
			color: ${({ theme }) => theme.secondaryColor};
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

export default LoginGroup;
