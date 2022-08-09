import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Toggle from '../components/Toggler';
import Navbar from '../components/Navbar';
import { CgCloseR } from 'react-icons/cg';
import { useNavigate } from 'react-router-dom';

const Settings = ({ themeToggler, theme }) => {
	const navigate = useNavigate();

	const handleClose = () => {
		navigate('/home');
	};
	return (
		<StyledSettings
			className='settings-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<h3>
				User settings
				<CgCloseR className='close-icon' onClick={handleClose} />
			</h3>

			<Toggle toggleTheme={themeToggler} theme={theme} />
			<Navbar />
		</StyledSettings>
	);
};
const StyledSettings = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	padding: 2rem;
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	transition: all 200ms linear;
	h3 {
		text-align: center;
		position: relative;
		color: ${({ theme }) => theme.txtDarkGrey};
		.close-icon {
			position: absolute;
			right: 0;
			top: 50%;
			transform: translateY(-50%);
			font-size: 2rem;
			color: ${({ theme }) => theme.txtDarkGrey};
		}
	}
`;

export default Settings;
