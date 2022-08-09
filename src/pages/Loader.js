import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { IoScale } from 'react-icons/io5';
// import { motion } from 'framer-motion';

const Loader = () => {
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			navigate('/home');
		}, 2000);
	});
	return (
		<StyledLoader
			className='site-loader'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<IoScale className='nav-icon' />
			{/* <div className='scale-wrapper'>
				<div className='base'>
					<div className='screen'>
						<div className='dial'></div>
					</div>
					<div className='pad'></div>
				</div>
			</div> */}
		</StyledLoader>
	);
};
const StyledLoader = styled(motion.section)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	width: 100%;
	height: 100%;
	background-color: ${({ theme }) => theme.secondaryColor};
	/* @include flex(center, center, column); */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	z-index: 500;

	.nav-icon {
		font-size: 10rem;
		color: ${({ theme }) => theme.bgGrey};
	}

	/* .scale-wrapper {

		height: 20rem;
		width: 20rem;
		.base {
			border-radius: 1rem;
			background-color: ${({ theme }) => theme.white};
			height: 100%;
			width: 100%;
			padding: 2rem;
			display: flex;
			flex-direction: column;
			align-items: center;
			row-gap: 2rem;
			.screen {
				border: 1px solid ${({ theme }) => theme.txtGrey};
				background-color: ${({ theme }) => theme.bgGrey};
				border-radius: 1rem;
				width: 8rem;
				height: 4rem;
			}
			.pad {
				border: 1px solid ${({ theme }) => theme.txtGrey};
				border-radius: 2rem;
				width: 100%;
				flex: 1;
				background-color: ${({ theme }) => theme.bgGrey};
			}
		}
	} */
`;

export default Loader;
