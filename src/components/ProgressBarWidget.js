import React from 'react';
import styled from 'styled-components';

const ProgressBarWidget = ({ percentage }) => {
	return (
		<StyledProgressBarWidget className='progress-bar-container'>
			<p>You have lost 20.30 Kgs</p>
			<progress value={percentage} max='100' className='progress' />
			<p>{percentage.toFixed(2)}% of goal reached</p>
		</StyledProgressBarWidget>
	);
};
const StyledProgressBarWidget = styled.div`
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem 3rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	flex: 1;
	row-gap: 0.3rem;
	/* padding: 0 1rem; */
	p {
		margin: 0;
		color: ${({ theme }) => theme.txtGrey};
	}
	progress[value] {
		width: 100%;
		appearance: none;
		::-webkit-progress-bar {
			height: 100%;
			border-radius: 5px;
			background-color: ${({ theme }) => theme.bgGrey};
			border: 1px solid ${({ theme }) => theme.txtDarkGrey};
			width: 100%;
		}
		::-webkit-progress-value {
			height: 100%;
			border-radius: 4px;
			background-color: ${({ theme }) => theme.primaryColor};
		}
	}
`;

export default ProgressBarWidget;
