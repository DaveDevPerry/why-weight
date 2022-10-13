// import { Link } from 'react-router-dom';
// import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import styled from 'styled-components';
// import { TbVinyl, TbDeviceAudioTape, TbDisc } from 'react-icons/tb';
// import { FiImage } from 'react-icons/fi';
import { log } from '../helper';
import { useUsersContext } from '../hooks/useUserContext';
import { useStateContext } from '../lib/context';
// import { format } from 'date-fns';

const UserDefaultMeasurementUnit = ({ targets }) => {
	// const { logout } = useLogout();
	const { user } = useAuthContext();
	const { active_user } = useUsersContext();
	const { setUnitMode, setDefaultUnitViewMode, defaultUnitViewMode } =
		useStateContext();

	const handleClick = (mode) => {
		// logout();
		log(mode, ' mode clicked');
		setUnitMode(mode);
		setDefaultUnitViewMode(mode);
	};
	return (
		<StyledUserDefaultMeasurementUnit>
			{user && active_user && (
				<div>
					<ul className='user-details-list'>
						<li>
							<p>Units:</p>
							<ul id='view-mode-menu'>
								<li
									id='kilograms'
									className={
										defaultUnitViewMode === 'kilograms'
											? 'active-view-mode'
											: ''
									}
									// className={
									// 	active_user.defaultView === 'tracklist'
									// 		? 'active-view-mode'
									// 		: ''
									// }
									onClick={() => {
										handleClick('kilograms');
									}}
								>
									<button
										className='view-mode-btn'
										onClick={() => {
											// setUnitMode('tracklist');
										}}
									>
										kilograms
									</button>
								</li>
								<li
									id='pounds'
									className={
										defaultUnitViewMode === 'pounds' ? 'active-view-mode' : ''
									}
									// className={
									// 	active_user.defaultView === 'pounds'
									// 		? 'active-view-mode'
									// 		: ''
									// }
									// className='active-view-mode'
									onClick={() => {
										handleClick('pounds');
									}}
								>
									<button
										className='view-mode-btn'
										onClick={() => {
											// setUnitMode('pounds');
										}}
									>
										pounds
									</button>
								</li>
								<li
									id='stones'
									className={
										defaultUnitViewMode === 'stones' ? 'active-view-mode' : ''
									}
									// className={
									// 	active_user.defaultView === 'stones'
									// 		? 'active-view-mode'
									// 		: ''
									// }
									// className='active-view-mode'
									onClick={() => {
										handleClick('stones');
									}}
								>
									<button
										className='view-mode-btn'
										onClick={() => {
											// setUnitMode('stones');
										}}
									>
										stones
									</button>
								</li>
							</ul>
						</li>
					</ul>

					{/* <button onClick={handleClick}>Log out</button> */}
				</div>
			)}
		</StyledUserDefaultMeasurementUnit>
	);
};
const StyledUserDefaultMeasurementUnit = styled.nav`
	background-color: ${({ theme }) => theme.white};
	transition: all 200ms linear;
	color: ${({ theme }) => theme.txtGrey};
	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		row-gap: 3rem;
		.user-details-list {
			list-style: none;
			li {
				display: flex;
				align-items: center;
				column-gap: 1rem;
				p {
					/* width: 12rem; */
					width: 8.5rem;
					text-align: right;
				}
				#view-mode-menu {
					display: flex;
					justify-content: flex-start;
					align-items: center;
					flex-direction: row;
					list-style: none;
					/* width: 100%; */
					column-gap: 0.5rem;
					li {
						cursor: pointer;
						/* flex: 1; */
						.view-mode-btn {
							padding: 0.3rem;
							outline: none;
							border: none;
							border-radius: 0.5rem;
							background-color: ${({ theme }) => theme.white};
							color: ${({ theme }) => theme.txtGrey};
							/* width: 8rem; */
							/* pointer-events: none; */
							border: 2px solid ${({ theme }) => theme.txtGrey};
							/* flex: 1; */
						}
						/* span {
							pointer-events: none !important;
						} */
						&.active-view-mode {
							/* li { */
							/* cursor: pointer; */
							.view-mode-btn {
								padding: 0.3rem;
								outline: none;
								border: none;
								border-radius: 0.5rem;
								background-color: ${({ theme }) => theme.secondaryColor};
								color: ${({ theme }) => theme.white};
								/* width: 8rem; */
								/* color: ${({ theme }) => theme.white}; */
								/* font-size: 3rem; */
								border: 2px solid ${({ theme }) => theme.secondaryColor};
								pointer-events: none;
							}
							/* span {
								pointer-events: none !important; */
						}
						/* } */
					}
				}
			}
		}
		/* } */

		a {
			text-decoration: none;
		}
	}
`;

export default UserDefaultMeasurementUnit;
