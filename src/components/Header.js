import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';
import { BsPlusCircleFill } from 'react-icons/bs';
// import { HiPresentationChartLine } from 'react-icons/hi';
// import { RiGroup2Fill } from 'react-icons/ri';

// import { IoScale } from 'react-icons/io5';
import { useStateContext } from '../lib/context';
import { AnimatePresence, motion } from 'framer-motion';
import WeightForm from './WeightForm';
import { useViewport } from '../hooks/useViewport';

const Header = () => {
	const { isFormActive, setIsFormActive } = useStateContext();
	const { width } = useViewport();
	const breakpoint = 620;

	const handleClick = () => {
		setIsFormActive(!isFormActive);
	};

	return (
		<StyledHeader>
			<div className='container'>
				<Link to='/'>
					<h1>Why Weight?</h1>
				</Link>
				{width < breakpoint ? (
					<nav className='top-nav'>
						<BsPlusCircleFill className='add-icon' onClick={handleClick} />
						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							<IoSettingsOutline className='settings-icon' />
						</NavLink>
					</nav>
				) : (
					<nav className='top-nav desktop'>
						{/* <BsPlusCircleFill className='add-icon' onClick={handleClick} /> */}
						<p className='add-weight' onClick={handleClick}>
							add weight
						</p>
						<NavLink
							to='/home'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							{/* <HiPresentationChartLine className='nav-icon' /> */}
							<p>home</p>
						</NavLink>
						<NavLink
							to='/weights'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							{/* <IoScale className='nav-icon' /> */}
							<p>weights</p>
						</NavLink>
						<NavLink
							to='/groups'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							{/* <RiGroup2Fill className='nav-icon' /> */}
							<p>groups</p>
						</NavLink>
						<NavLink
							to='/settings'
							className={({ isActive }) => (isActive ? 'active' : 'inactive')}
						>
							{/* <IoSettingsOutline className='settings-icon' /> */}
							<p>settings</p>
						</NavLink>
					</nav>
				)}
				{/* <nav className='top-nav'>
					<BsPlusCircleFill className='add-icon' onClick={handleClick} />
					<NavLink
						to='/settings'
						className={({ isActive }) => (isActive ? 'active' : 'inactive')}
					>
						<IoSettingsOutline className='settings-icon' />
					</NavLink>
				</nav> */}
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
		z-index: 500;
		h1 {
			font-size: 2rem;
			color: ${({ theme }) => theme.secondaryColor};
			font-family: 'Fuzzy Bubbles', cursive;
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
				}
			}
		}
		nav.top-nav.desktop {
			display: flex;
			align-items: center;
			justify-content: space-between;
			column-gap: 2rem;
			.add-weight {
				color: ${({ theme }) => theme.txtDarkGrey};
				font-size: 1.6rem;
				text-transform: uppercase;
				cursor: pointer;
			}
			a {
				display: grid;
				place-content: center;
				p {
					color: ${({ theme }) => theme.txtDarkGrey};
					font-size: 1.6rem;
					text-transform: uppercase;
				}
			}

			a.active {
				p {
					color: ${({ theme }) => theme.secondaryColor};
				}
			}
		}
	}
`;

const StyledWeightModel = styled(motion.div)`
	position: absolute;
	border-radius: 4px;
	box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.5);
	bottom: -1rem;
	left: 50%;
	transform: translate(-50%, -100%);
	z-index: 5;
	width: calc(100% - 2rem);
`;

export default Header;
