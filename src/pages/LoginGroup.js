import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLoginGroup } from '../hooks/useLoginGroup';
import { Link } from 'react-router-dom';

const LoginGroup = () => {
	const [title, setTitle] = useState('');
	const [pin, setPin] = useState('');
	const { login, error, isLoading } = useLoginGroup();

	const handleSubmit = async (e) => {
		e.preventDefault();

		await login(title, pin);
	};

	return (
		<StyledLogin
			className='login-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<form onSubmit={handleSubmit} className='login'>
				<h3>Log in</h3>
				<div>
					<label>title:</label>
					<input
						type='text'
						onChange={(e) => setTitle(e.target.value)}
						value={title}
						autoComplete='current-title'
					/>
				</div>
				<div>
					<label>pin:</label>
					<input
						type='password'
						onChange={(e) => setPin(e.target.value)}
						value={pin}
						autoComplete='current-pin'
					/>
				</div>
				<button disabled={isLoading}>Log in</button>
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
	row-gap: 2rem;
	.login {
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

export default LoginGroup;