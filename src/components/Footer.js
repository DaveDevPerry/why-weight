import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { BsPlusCircleFill } from 'react-icons/bs';
import WeightForm from './WeightForm';
// import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { HiPresentationChartLine } from 'react-icons/hi';
import { IoScale } from 'react-icons/io5';
import { useStateContext } from '../lib/context';

const Footer = () => {
	const { user } = useAuthContext();
	const { isFormActive, setIsFormActive } = useStateContext();

	const handleClick = () => {
		setIsFormActive(!isFormActive);
	};

	return (
		<StyledFooter>
			<nav>
				{user && (
					<div>
						<NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							{/* Home */}
							<HiPresentationChartLine className='nav-icon' />
						</NavLink>
						{/* <NavLink
							to='/add-weight'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						> */}
						<BsPlusCircleFill className='add-icon' onClick={handleClick} />
						{/* </NavLink> */}

						<NavLink
							to='/weights'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							{/* Weights */}
							<IoScale className='nav-icon' />
						</NavLink>
					</div>
				)}
			</nav>
			<AnimatePresence exitBeforeEnter>
				{isFormActive && (
					<StyledWeightModel
						initial={{ y: 0, translateX: '-50%' }}
						animate={{ translateY: '-100%' }}
						exit={{ translateY: '100%' }}
					>
						<WeightForm
							isFormActive={isFormActive}
							setIsFormActive={setIsFormActive}
						/>
					</StyledWeightModel>
				)}
			</AnimatePresence>
		</StyledFooter>
	);
};
const StyledFooter = styled.footer`
	background: ${({ theme }) => theme.white};
	position: relative;
	transition: all 200ms linear;
	/* z-index: 5; */
	nav {
		div {
			max-width: 1400px;
			/* padding: 1rem; */
			display: flex;
			align-items: center;
			justify-content: space-between;
			a {
				color: ${({ theme }) => theme.txtDarkGrey};
				text-decoration: none;
				flex: 1;
				text-align: center;
				text-transform: uppercase;
				font-weight: bold;
				margin: 1rem;
				display: grid;
				place-content: center;
				.nav-icon {
					font-size: 3rem;
					color: ${({ theme }) => theme.txtGrey};
				}
				&.active {
					color: ${({ theme }) => theme.secondaryColor};
					/* border: 2px solid ${({ theme }) => theme.secondaryColor}; */
					/* color: ${({ theme }) => theme.primaryColor};
					border: 2px solid ${({ theme }) => theme.primaryColor}; */
					/* border-radius: 0.4rem; */
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
					}
				}
			}
			.add-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 3.5rem;
			}
		}
	}
`;

const StyledWeightModel = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 50%;
	width: max-content;
	/* margin: 1rem; */
	transform: translate(-50%, -100%);
	/* z-index: -1; */
`;

export default Footer;
