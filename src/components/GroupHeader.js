import React from 'react';
import styled from 'styled-components';
// import { groupsReducer } from '../context/GroupContext';

const GroupHeader = ({ group }) => {
	return (
		<StyledGroupHeader>
			<ul className='group-header-list'>
				<li>
					<p>id:</p>
					<span>{group._id}</span>
				</li>
				<li>
					<p>name:</p>
					<span>{group.title}</span>
				</li>
				<li>
					<p>PIN:</p>
					<span>{group.pin}</span>
				</li>
				<li>
					<p>chair:</p>
					<span>{group.chairperson_user_id}</span>
				</li>
				<li>
					<p>date:</p>
					<span>12/12/2022</span>
				</li>
				<li>
					<p>event:</p>
					<span>wedding</span>
				</li>
			</ul>
		</StyledGroupHeader>
	);
};
const StyledGroupHeader = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0.5rem 0; */
	padding: 1rem;
	/* position: relative; */
	box-shadow: 2px 2px 0.5rem rgba(0, 0, 0, 0.05);
	/* display: flex;
	justify-content: space-between;
	align-items: center;
	column-gap: 1rem; */
	.group-header-list {
		list-style: none;
		li {
			display: flex;
			align-items: center;
			column-gap: 1rem;
			p {
				width: 5rem;
				text-align: right;
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
`;

export default GroupHeader;
