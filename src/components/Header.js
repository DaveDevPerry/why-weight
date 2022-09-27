import { Link, NavLink } from 'react-router-dom';
// import {  Navigate } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
// import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';
// import { RiGroup2Fill } from 'react-icons/ri';
import { BsPlusCircleFill } from 'react-icons/bs';
import { useStateContext } from '../lib/context';
import { AnimatePresence, motion } from 'framer-motion';
import WeightForm from './WeightForm';

const Header = () => {
	const { isFormActive, setIsFormActive } = useStateContext();

	const handleClick = () => {
		setIsFormActive(!isFormActive);
	};
	// const { logout } = useLogout();
	// const { user } = useAuthContext();

	// const handleClick = () => {
	// 	logout();
	// };
	return (
		<StyledHeader>
			<div className='container'>
				<Link to='/'>
					<h1>Why Weight?</h1>
				</Link>
				{/* <nav>
					{user && (
						<div>
							<span>{user.email}</span>
							<button onClick={handleClick}>Log out</button>
						</div>
					)}
					{!user && (
						<div>
							<Link to='/login'>Login</Link>
							<Link to='/signup'>Signup</Link>
						</div>
					)}
				</nav> */}
				{/* <NavLink
					to='/groups'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<RiGroup2Fill className='settings-icon' />
				</NavLink> */}
				<nav className='top-nav'>
					<BsPlusCircleFill className='add-icon' onClick={handleClick} />
					{/* <BsPlusCircleFill className='add-icon' onClick={handleClick} /> */}
					<NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<IoSettingsOutline className='settings-icon' />
					</NavLink>
				</nav>
			</div>
			<AnimatePresence mode='wait'>
				{isFormActive && (
					<StyledWeightModel
						initial={{ y: 0, translateX: '-50%' }}
						animate={{ translateY: '100%' }}
						exit={{ translateY: '-100%' }}
					>
						<WeightForm
							isFormActive={isFormActive}
							setIsFormActive={setIsFormActive}
						/>
					</StyledWeightModel>
				)}
			</AnimatePresence>
			{/* </div> */}
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
	background: ${({ theme }) => theme.white};
	transition: all 200ms linear;
	position: relative;
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: ${({ theme }) => theme.white};
		/* position: relative; */
		z-index: 500;
		h1 {
			font-size: 2rem;
			color: ${({ theme }) => theme.secondaryColor};
		}
		a {
			display: grid;
			place-content: center;
			.settings-icon {
				color: ${({ theme }) => theme.txtDarkGrey};
				font-size: 3rem;
			}
		}
		nav.top-nav {
			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: 2rem;
			.add-icon {
				color: ${({ theme }) => theme.primaryColor};
				font-size: 2.8rem;
			}
			a {
				display: grid;
				place-content: center;
				.settings-icon {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 3rem;
				}
			}

			a.active {
				.settings-icon {
					color: ${({ theme }) => theme.secondaryColor};
					/* color: ${({ theme }) => theme.primaryColor}; */
				}
			}
		}
	}

	/* nav {
			display: flex;
			align-items: center;
			text-align: right;
		}
		nav a,
		nav button {
			margin-left: 1rem;
		}
		nav button {
			background: ${({ theme }) => theme.white};
			color: ${({ theme }) => theme.primaryColor};
			border: 2px solid ${({ theme }) => theme.primaryColor};
			padding: 0.3rem 0.6rem;
			border-radius: 0.4rem;
			font-family: 'Poppins';
			cursor: pointer;
			font-size: 1em;
		} */
`;

const StyledWeightModel = styled(motion.div)`
	position: absolute;
	border-radius: 4px;
	box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
	/* z-index: 4; */
	/* top: 0; */
	/* top: 100%; */
	/* top: calc(100% + 1rem); */
	/* bottom: 0; */
	bottom: -1rem;
	/* bottom: calc(0 + 1rem); */
	left: 50%;
	width: max-content;
	/* margin: 1rem; */
	transform: translate(-50%, -100%);
	/* z-index: -1; */
`;

export default Header;
