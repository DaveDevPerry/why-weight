import { Link } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { format } from 'date-fns';
import { log } from '../helper';
// import toast from 'react-hot-toast';

const Navbar = ({ targets }) => {
	// const { logout } = useLogout();
	const { user } = useAuthContext();

	// const handleClick = () => {
	// 	logout();
	// 	notify();
	// };
	log(user._id, ' user id in nav');

	// create a toast
	// const notify = () => {
	// 	toast.success(`you are now logged out.`, {
	// 		// toast.success(`${headline_band} gig successfully added.`, {
	// 		duration: 3000,
	// 		style: {
	// 			border: '2px solid #1da000',
	// 		},
	// 	});
	// };
	return (
		<StyledNavbar>
			{/* <div className='container'> */}
			{/* <Link to='/'>
					<h1>
						Wedding
						<br />
						Weight
					</h1>
				</Link> */}
			{/* <nav> */}
			{user && (
				<div>
					<h5 className='sub-heading'>account</h5>
					<ul className='user-details-list'>
						{user.first_name && user.last_name && (
							<li>
								<p>name:</p>
								<span id='full-name'>
									{user.first_name} {user.last_name}
								</span>
							</li>
						)}

						<li>
							<p>email:</p>
							<span>{user.email}</span>
						</li>

						{/* {targets.length === 1 && (
							<>
								<li>
									<p>target:</p>
									<span>{targets[0].target_weight.toFixed(2)} Kgs</span>
								</li>
								<li>
									<p>date:</p>
									<span>
										{format(new Date(targets[0].deadline_date), 'dd/MM/yyyy')}
									</span>
								</li>
								<li>
									<p>event:</p>
									<span>{targets[0].deadline_reason}</span>
								</li>
							</>
						)} */}
					</ul>

					{/* <button onClick={handleClick}>Log out</button> */}
				</div>
			)}
			{!user && (
				<div>
					<Link to='/login'>Login</Link>
					<Link to='/signup'>Signup</Link>
				</div>
			)}
			{/* </nav> */}
			{/* </div> */}
		</StyledNavbar>
	);
};
const StyledNavbar = styled.nav`
	background: ${({ theme }) => theme.white};
	transition: all 200ms linear;
	/* .container { */
	/* max-width: 1400px; */
	/* margin: 0 auto; */
	/* padding: 0.5rem 1rem; */
	color: ${({ theme }) => theme.txtGrey};
	/* flex: 1; */
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		/* row-gap: 0.5rem; */
		.sub-heading {
			color: ${({ theme }) => theme.secondaryColor};
			border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
			margin-bottom: 1rem;
			width: 100%;
		}
		.user-details-list {
			list-style: none;
			font-size: 1.4rem;
			li {
				display: flex;
				align-items: center;
				column-gap: 1rem;
				p {
					width: 6rem;
					text-align: right;
					font-weight: bold;
				}
				#full-name {
					text-transform: capitalize;
				}
			}
		}
		/* h1 {
		font-size: 2rem;
	} */
		/* nav {
		display: flex;
		align-items: center;
		text-align: right;
	} */
		/* a,
	button {
		margin-left: 1rem;
	} */
		p {
			span {
				font-weight: bold;
				text-transform: capitalize;
			}
		}
		a {
			text-decoration: none;
		}
		/* button {
			align-self: flex-end;
			background: ${({ theme }) => theme.white};
			color: ${({ theme }) => theme.secondaryColor};
			border: 2px solid ${({ theme }) => theme.secondaryColor};
			padding: 0.3rem 0.6rem;
			border-radius: 0.4rem;
			font-family: 'Poppins';
			cursor: pointer;
			font-size: 1em;
		} */
	}
	/* } */
`;

export default Navbar;
