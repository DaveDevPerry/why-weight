import { Link, NavLink } from 'react-router-dom';
// import {  Navigate } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
// import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
import { IoSettingsOutline } from 'react-icons/io5';
import { RiGroup2Fill } from 'react-icons/ri';

const Header = () => {
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
				<NavLink
					to='/groups'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<RiGroup2Fill className='settings-icon' />
				</NavLink>
				<NavLink
					to='/settings'
					className={({ isActive }) => (isActive ? 'active' : 'inactive')}
				>
					<IoSettingsOutline className='settings-icon' />
				</NavLink>
			</div>
		</StyledHeader>
	);
};
const StyledHeader = styled.header`
	background: ${({ theme }) => theme.white};
	transition: all 200ms linear;
	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
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
		a.active {
			.settings-icon {
				color: ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.primaryColor}; */
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

export default Header;
