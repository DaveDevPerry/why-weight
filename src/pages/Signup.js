import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useSignup } from '../hooks/useSignup';
import { Link, useNavigate } from 'react-router-dom';
import AppDetails from '../components/AppDetails';
import toast from 'react-hot-toast';

const Signup = ({ theme }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [first_name, setFirst_name] = useState('');
	const [last_name, setLast_name] = useState('');
	const { signup, isLoading, error } = useSignup();
	let navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await signup(email, password, first_name, last_name);

		notify();

		setTimeout(() => {
			navigate('/');
		}, 3000);
	};

	// create a toast
	const notify = () => {
		toast.success(`you have successfully signed up.`, {
			// toast.success(`${headline_band} gig successfully added.`, {
			duration: 3000,
			style: {
				border: '2px solid #1da000',
			},
		});
	};

	return (
		<StyledSignup
			className='signup-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<form onSubmit={handleSubmit} className='signup br'>
				<h3>Sign up</h3>
				<div>
					<label>Email:</label>
					<input
						type='email'
						onChange={(e) => setEmail(e.target.value)}
						value={email}
					/>
				</div>
				<div>
					<label>Password:</label>
					<input
						type='password'
						onChange={(e) => setPassword(e.target.value)}
						value={password}
					/>
				</div>
				<div>
					<label>First Name:</label>
					<input
						type='text'
						onChange={(e) => setFirst_name(e.target.value)}
						value={first_name}
					/>
				</div>
				<div>
					<label>Last Name:</label>
					<input
						type='text'
						onChange={(e) => setLast_name(e.target.value)}
						value={last_name}
					/>
				</div>

				<button disabled={isLoading}>Sign up</button>
				{error && <div className='error'>{error}</div>}
			</form>

			<p>
				Got an account? Log in<Link to='/login'> here</Link>
			</p>

			<AppDetails theme={theme} />
		</StyledSignup>
	);
};
const StyledSignup = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* padding: 0.5rem; */
	max-width: 100rem;
	padding: 0.5rem 1rem;
	/* max-width: 42rem; */
	/* border: 2px solid blue; */
	/* padding: 0 1rem; */
	overflow-y: auto;
	/* overflow: hidden; */
	z-index: 1;
	/* overflow-y: auto; */
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	.signup {
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
		color: ${({ theme }) => theme.txtGrey};
		a {
			color: ${({ theme }) => theme.secondaryColor};
			text-decoration: none;
		}
	}
`;

export default Signup;
