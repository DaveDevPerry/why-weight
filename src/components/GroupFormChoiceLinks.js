import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CgPlayListAdd, CgPlayListSearch } from 'react-icons/cg';

const GroupFormChoiceLinks = ({ setCurrentFormOpen, handleFormChoice }) => {
	return (
		<StyledGroupFormChoiceLinks>
			<NavLink
				to='/groups/signup'
				className={({ isActive }) => (isActive ? 'active br' : 'inactive br')}
			>
				<div
					className='group-btn-wrapper'
					// onClick={(e) => {
					// 	handleFormChoice('create');
					// }}
				>
					<div className='icon-wrapper'>
						<CgPlayListAdd className='create-group-icon group-btn-icon' />
					</div>
					<div className='text-wrapper'>
						<p className='group-btn-text'>CREATE GROUP</p>
					</div>
				</div>
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
				className={({ isActive }) => (isActive ? 'active br' : 'inactive br')}
			>
				<div
					className='group-btn-wrapper'
					// onClick={(e) => {
					// 	handleFormChoice('join');
					// }}
				>
					<div className='icon-wrapper'>
						<CgPlayListSearch className='join-group-icon group-btn-icon' />
					</div>
					<div className='text-wrapper'>
						<p className='group-btn-text'>JOIN A GROUP</p>
					</div>
				</div>
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
	/* padding: 0.5rem; */
	a {
		flex: 1;
		text-decoration: none;
		.group-btn-wrapper {
			/* align-self: flex-end; */
			background: ${({ theme }) => theme.white};
			color: ${({ theme }) => theme.secondaryColor};
			/* border: none; */
			/* color: ${({ theme }) => theme.primaryColor};
			border: 2px solid ${({ theme }) => theme.primaryColor}; */
			padding: 0.5rem 1rem;
			/* padding: 0.3rem 0.6rem; */
			border-radius: 0.4rem;
			/* font-family: 'Poppins'; */
			cursor: pointer;
			/* font-size: 1em; */
			/* width: 100%; */
			/* flex: 1; */
			display: flex;
			justify-content: center;
			align-items: center;
			.icon-wrapper {
				/* border: 1px solid; */
				/* display: grid;
				place-content: center; */
				display: flex;
				align-items: center;
				justify-content: center;
				flex: 1;
				.group-btn-icon {
					font-size: 2.6em;
				}
			}
			.text-wrapper {
				flex: 1;
				/* border: 1px solid red; */
				/* display: flex; */
				flex-wrap: wrap;
				display: flex;
				align-items: center;
				justify-content: center;
				.group-btn-text {
					/* flex: 1;
					border: 1px solid red; */

					display: flex;
					align-items: center;
					justify-content: center;
					line-height: 1.2;
					text-align: center;
				}
			}
		}
	}
`;

export default GroupFormChoiceLinks;
