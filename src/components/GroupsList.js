import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import { log } from '../helper';
import GroupDetails from './GroupDetails';
import { FaUsers } from 'react-icons/fa';

const GroupsList = ({ groups }) => {
	log(groups, 'groups groups list');
	return (
		<StyledGroupsList>
			<div className='groups-list-header'>
				<p>All groups</p>
				<div>
					<FaUsers className='nav-icon' />
					{groups && groups.length}
				</div>
			</div>
			<div className='groups-list-container'>
				<div className='groups-list'>
					{groups &&
						groups.map((group) => {
							return <GroupDetails key={group._id} group={group} />;
						})}
				</div>
			</div>
		</StyledGroupsList>
	);
};
const StyledGroupsList = styled.div`
	overflow-y: auto;
	/* flex: 1; */
	display: flex;
	flex-direction: column;
	.groups-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		margin-bottom: 0.5rem;
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
			span {
				text-transform: capitalize;
			}
		}
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
			font-weight: bold;
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
	}
	.groups-list-container {
		/* overflow-y: auto; */
		/* flex: 1; */
		overflow-y: auto;
		/* border: 1px solid; */
		scroll-behavior: smooth;
		.groups-list {
			/* border: 2px solid blue; */
			display: flex;
			flex-direction: column;
			/* flex: 1; */
			row-gap: 1rem;
			padding: 0.5rem;
			/* overflow-y: auto; */
			/* overflow-y: hidden; */
			/* overflow-y: auto; */
		}
	}
`;

export default GroupsList;
