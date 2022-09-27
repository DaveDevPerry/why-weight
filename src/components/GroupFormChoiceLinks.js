import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const GroupFormChoiceLinks = ({ setCurrentFormOpen, handleFormChoice }) => {
	return (
		<StyledGroupFormChoiceLinks>
			<NavLink
				to='/groups/signup'
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				<button
				// onClick={(e) => {
				// 	handleFormChoice('create');
				// }}
				>
					CREATE GROUP
				</button>
			</NavLink>
			{/* <NavLink
				to='/groups/new'
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				<button
				// onClick={(e) => {
				// 	handleFormChoice('create');
				// }}
				>
					CREATE
				</button>
			</NavLink> */}
			<NavLink
				to='/groups/login'
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				<button
				// onClick={(e) => {
				// 	handleFormChoice('join');
				// }}
				>
					JOIN A GROUP
				</button>
			</NavLink>
			{/* <NavLink
				to='/groups/join'
				className={({ isActive }) => (isActive ? 'active' : 'inactive')}
			>
				<button
				// onClick={(e) => {
				// 	handleFormChoice('join');
				// }}
				>
					JOIN
				</button>
			</NavLink> */}
			{/* <button
				onClick={(e) => {
					handleFormChoice('join');
				}}
			>
				JOIN
			</button>
			<button
				onClick={(e) => {
					handleFormChoice('join');
				}}
			>
				JOIN
			</button> */}

			{/* <button onClick={setCurrentFormOpen('join')}>JOIN</button> */}
			{/* <button onClick={setCurrentFormOpen('create')}>CREATE</button>
			<button onClick={setCurrentFormOpen('join')}>JOIN</button> */}
			{/* <button onClick={handleClick}>Log out</button> */}
		</StyledGroupFormChoiceLinks>
	);
};
const StyledGroupFormChoiceLinks = styled.div`
	/* background: ${({ theme }) => theme.white}; */
	/* border-radius: 4px; */
	/* margin: 0.5rem 0; */
	/* padding: 1rem; */
	/* position: relative; */
	/* box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05); */
	display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem;
	a {
		flex: 1;
		button {
			/* align-self: flex-end; */
			background: ${({ theme }) => theme.white};
			color: ${({ theme }) => theme.secondaryColor};
			border: none;
			/* color: ${({ theme }) => theme.primaryColor};
			border: 2px solid ${({ theme }) => theme.primaryColor}; */
			padding: 0.3rem 0.6rem;
			border-radius: 0.4rem;
			font-family: 'Poppins';
			cursor: pointer;
			font-size: 1em;
			width: 100%;
			/* flex: 1; */
		}
	}
`;

export default GroupFormChoiceLinks;
