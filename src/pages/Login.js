import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLogin } from '../hooks/useLogin';
import { Link } from 'react-router-dom';

import AppDetails from '../components/AppDetails';

import toast from 'react-hot-toast';

const Login = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { login, error, isLoading } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(email, password);

		notify(email);
	};

	// create a toast
	const notify = () => {
		toast.success(`logged in as ${email}.`, {
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
				<h3>Log in</h3>
				<div>
					<label>Email:</label>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
						autoComplete='current-email'
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						autoComplete='current-password'
					/>
				</div>
				<button disabled={isLoading}>Log in</button>
				{error && <div className='error'>{error}</div>}
			</form>

			<p>
				Need an account? Sign up<Link to='/signup'> here</Link>
			</p>

			<AppDetails theme={theme} />
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

export default Login;
