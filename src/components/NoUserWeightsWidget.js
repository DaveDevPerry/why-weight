import React from 'react';
import styled from 'styled-components';
// import GroupFormChoiceLinks from './GroupFormChoiceLinks';
// import { groupsReducer } from '../context/GroupContext';

const NoUserWeightsWidget = ({ setCurrentFormOpen, handleFormChoice }) => {
	// log(group, 'group');
	return (
		<StyledNoUserWeightsWidget>
			<h3>weights</h3>
			<h4>
				your weight data will be displayed here once you have recorded your
				current weight.
			</h4>

			<p>click on icon above to record your weight</p>
			{/* <ul id='no-group-header-list'>
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
			/> */}
		</StyledNoUserWeightsWidget>
	);
};
const StyledNoUserWeightsWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	padding: 2rem;
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	row-gap: 2rem;
	h3 {
	}
	h4 {
	}
	p {
	}
	/* ul#no-group-header-list {
		list-style-type: disc;
		margin-left: 2rem;
		li {
			display: list-item;
		}
	} */
`;

export default NoUserWeightsWidget;
