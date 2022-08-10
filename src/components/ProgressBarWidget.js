import React from 'react';
import styled from 'styled-components';

const ProgressBarWidget = ({ percentage, targets, weights }) => {
	const initialWeight = weights.sort((a, b) => {
		return new Date(a.createdAt) - new Date(b.createdAt);
	})[0].load;
	const currentWeight = weights[weights.length - 1].load;
	const targetWeight = targets[0].target_weight;

	const weightFluctuation = (initialWeight - currentWeight).toFixed(2);

	const progressPercentage = (
		(weightFluctuation / (initialWeight - targetWeight)) *
		100
	).toFixed(2);

	return (
		<>
			{targets && weights && (
				<StyledProgressBarWidget className='progress-bar-container'>
					{weightFluctuation < 0 && (
						<p>You have gained {weightFluctuation} Kgs</p>
					)}
					{weightFluctuation > 0 && (
						<p>You have lost {weightFluctuation} Kgs</p>
					)}
					<progress value={progressPercentage} max='100' className='progress' />
					<p>{progressPercentage}% of goal reached</p>
				</StyledProgressBarWidget>
			)}
		</>
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
