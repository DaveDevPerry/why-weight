import { NavLink } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { BsPlusCircleFill } from 'react-icons/bs';
// import WeightForm from './WeightForm';
// import { useState } from 'react';
// import { AnimatePresence, motion } from 'framer-motion';
import { HiPresentationChartLine } from 'react-icons/hi';
import { RiGroup2Fill } from 'react-icons/ri';

import { IoScale } from 'react-icons/io5';
// import { useStateContext } from '../lib/context';

const Footer = () => {
	const { user } = useAuthContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	// const handleClick = () => {
	// 	setIsFormActive(!isFormActive);
	// };

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
							<p>home</p>
						</NavLink>
						{/* <NavLink
							to='/add-weight'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						> */}
						{/* <BsPlusCircleFill className='add-icon' onClick={handleClick} /> */}
						{/* </NavLink> */}

						<NavLink
							to='/weights'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							{/* Weights */}
							<IoScale className='nav-icon' />
							<p>weights</p>
						</NavLink>
						<NavLink
							to='/groups'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<RiGroup2Fill className='nav-icon' />
							<p>groups</p>
						</NavLink>
					</div>
				)}
			</nav>
			{/* <AnimatePresence mode='wait'>
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
			</AnimatePresence> */}
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
			display: flex;
			align-items: center;
			justify-content: space-evenly;
			a {
				color: ${({ theme }) => theme.txtDarkGrey};
				text-decoration: none;
				flex: 1;
				text-align: center;
				text-transform: uppercase;
				font-weight: bold;
				padding: 0.5rem 0 0.2rem 0;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				.nav-icon {
					font-size: 2.4rem;
					color: ${({ theme }) => theme.txtGrey};
					position: relative;
				}
				&:hover {
					color: ${({ theme }) => theme.secondaryColor};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
				}
				&.active {
					color: ${({ theme }) => theme.secondaryColor};
					-webkit-transition: all 0.5s ease;
					transition: all 0.5s ease;
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
						-webkit-transition: all 0.5s ease;
						transition: all 0.5s ease;
					}
				}

				p {
					text-transform: uppercase;
					font-size: 1rem;
					font-weight: normal;
				}
			}
			a:before,
			a:after {
				position: absolute;
				-webkit-transition: all 0.8s ease;
				transition: all 0.8s ease;
				/* -webkit-transition: all 0.5s ease;
				transition: all 0.5s ease; */
			}
			a:before {
				/* top: 5px; */
				top: 0;
				display: block;
				height: 3px;
				width: 0%;
				content: '';
				background-color: ${({ theme }) => theme.secondaryColor};
				/* background-color: #c0392b; */
			}
			a:after {
				left: 0;
				/* top: 5px; */
				top: 0;
				padding: 0.5em 0;
				position: absolute;
				content: '';
				color: #ffffff;
				white-space: nowrap;
				max-width: 0%;
				overflow: hidden;
			}
			a:hover:before {
				opacity: 1;
				width: 4.5rem;
			}
			a.active:before {
				opacity: 1;
				width: 4.5rem;
			}
			a:hover:after {
				/* opacity: 1; */
				max-width: 100%;
			}
			.add-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 3.5rem;
			}
		}

		/* div {
			max-width: 1400px;
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
					.nav-icon {
						color: ${({ theme }) => theme.secondaryColor};
					}
				}
			}
			.add-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 3.5rem;
			}
		} */
	}
`;

// const StyledWeightModel = styled(motion.div)`
// 	position: absolute;
// 	top: 0;
// 	left: 50%;
// 	width: max-content;
// 	/* margin: 1rem; */
// 	transform: translate(-50%, -100%);
// 	/* z-index: -1; */
// `;

export default Footer;
