import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import { log } from '../helper';
import GroupDetails from './GroupDetails';

const GroupsList = ({ groups }) => {
	log(groups, 'groups groups list');
	return (
		<StyledGroupsList className='groups-list-container'>
			<div className='groups-list'>
				{groups &&
					groups.map((group) => {
						return <GroupDetails key={group._id} group={group} />;
					})}
			</div>
		</StyledGroupsList>
	);
};
const StyledGroupsList = styled.div`
	/* overflow-y: auto; */
	flex: 1;
	p.groups-list-header {
		padding: 0 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 0.9em;
	}
	.groups-list {
		/* border: 2px solid blue; */
		display: flex;
		flex-direction: column;
		flex: 1;
		row-gap: 0.3rem;
		/* overflow-y: auto; */
		/* overflow-y: hidden; */
		overflow-y: scroll;
	}
`;

export default GroupsList;
