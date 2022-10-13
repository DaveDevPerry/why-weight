import React from 'react';
import styled from 'styled-components';
import GroupFormChoiceLinks from './GroupFormChoiceLinks';
// import { groupsReducer } from '../context/GroupContext';

const NoUserGroupsWidget = ({ setCurrentFormOpen, handleFormChoice }) => {
	// log(group, 'group');
	return (
		<StyledNoUserGroupsWidget className='br'>
			<h3>groups</h3>
			<h4>
				groups enable you and your friends to share progress and are helpful if
				you all have the same target date or event to lose weight
			</h4>

			<p>you are in no groups currently</p>
			<ul id='no-group-header-list'>
				<li>
					<p>create a group for you and your friends</p>
				</li>
				<li>
					<p>join an existing group using group credentials</p>
				</li>
			</ul>
			<GroupFormChoiceLinks
				setCurrentFormOpen={setCurrentFormOpen}
				handleFormChoice={handleFormChoice}
			/>
		</StyledNoUserGroupsWidget>
	);
};
const StyledNoUserGroupsWidget = styled.div`
	/* background: ${({ theme }) => theme.white}; */
	/* border-radius: 4px; */
	padding: 2rem;
	/* box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05); */
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	color: ${({ theme }) => theme.txtGrey};
	h3 {
		color: ${({ theme }) => theme.secondaryColor};
		font-size: 2rem;
		text-transform: capitalize;
	}
	h4 {
	}
	p {
	}
	ul#no-group-header-list {
		list-style-type: disc;
		/* display: list-item; */
		margin-left: 2rem;
		/* padding-left: 2rem; */
		li {
			display: list-item;
			/* display: flex;
			justify-content: flex-start;
			align-items: center;
			column-gap: 1rem; */
			p {
				/* width: 5rem; */
				/* text-align: right; */
			}
			&::marker {
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
	}
`;

export default NoUserGroupsWidget;
