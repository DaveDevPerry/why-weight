import React from 'react';
import styled from 'styled-components';
import { differenceInDays } from 'date-fns';

const WeightGoalsWidget = ({ target, weights }) => {
	const initialWeight = weights[weights.length - 1].load;
	const targetWeight = target.target_weight;
	const initialWeightToLose =
		weights[weights.length - 1].load - target.target_weight;
	const currentWeight = weights[0].load;
	const weightToLose = currentWeight - targetWeight;
	const daysRemaining = differenceInDays(
		new Date(target.deadline_date),
		new Date()
	);
	const weightRemaining = initialWeight - targetWeight;
	// const daysRemaining = 100;
	const dailyWeightToLose = (weightToLose / daysRemaining).toFixed(2);
	// const weightToLose = 20;
	// const daysRemaining = 100;
	// const dailyWeightToLose = (weightToLose / daysRemaining).toFixed(2);
	return (
		<StyledWeightGoalsWidget className='br'>
			<div className='progress-widget-wrapper-container'>
				<div className='wrapper'>
					<p className='figure'>
						<strong>{initialWeightToLose.toFixed(2)}</strong>
						<span> Kgs</span>
					</p>
					<p className='stat-name'>
						Weight
						<br />
						To Lose
					</p>
					<p className='figure'>
						<strong>{(initialWeightToLose * 2.20462).toFixed(2)}</strong>
						<span> Lbs</span>
					</p>
				</div>

				{/* <div className='wrapper-icon'>
					<p className='figure'>
						{(
							weights[weights.length - 1].load -
							weights.sort((a, b) => {
								return new Date(a.createdAt) - new Date(b.createdAt);
							})[0].load
						).toFixed(2)}
					</p>
					{(
						weights[weights.length - 1].load -
						weights.sort((a, b) => {
							return new Date(a.createdAt) - new Date(b.createdAt);
						})[0].load
					).toFixed(2) > 0 && <ImArrowUp className='arrow-icon red' />}
					{(
						weights[weights.length - 1].load -
						weights.sort((a, b) => {
							return new Date(a.createdAt) - new Date(b.createdAt);
						})[0].load
					).toFixed(2) < 0 && <ImArrowDown className='arrow-icon green' />}
					<p className='figure'>
						{(
							(weights[weights.length - 1].load -
								weights.sort((a, b) => {
									return new Date(a.createdAt) - new Date(b.createdAt);
								})[0].load) *
							2.20462
						).toFixed(2)}
					</p>
				</div> */}

				<div className='wrapper'>
					<p className='figure'>
						<strong>{dailyWeightToLose}</strong>
						<span> Kgs</span>
					</p>
					<p className='stat-name'>
						Daily
						<br />
						Goal
					</p>
					{/* <ImArrowUp className='arrow-icon' /> */}
					{/* <ImArrowDown className='arrow-icon' /> */}
					<p className='figure'>
						<strong>{(dailyWeightToLose * 2.20462).toFixed(2)}</strong>
						<span> Lbs</span>
					</p>
				</div>

				{/* <div className='wrapper-icon'>
					<p className='figure'>
						
						{(weights[weights.length - 1].load - target.target_weight).toFixed(
							2
						)}
						
					</p>
					{(weights[weights.length - 1].load - target.target_weight).toFixed(
						2
					) > 0 && <ImArrowRight className='arrow-icon red' />}
					{(weights[weights.length - 1].load - target.target_weight).toFixed(
						2
					) <= 0 && <FaCheck className='arrow-icon green' />}
					<p className='figure'>
						
						{(
							(weights[weights.length - 1].load - target.target_weight) *
							2.20462
						).toFixed(2)}

					
						
					</p>
				</div> */}

				<div className='wrapper'>
					<p className='figure'>
						<strong>{weightRemaining.toFixed(2)}</strong>
						{/* <strong>{target.target_weight.toFixed(2)}</strong> */}
						<span> Kgs</span>
					</p>
					<p className='stat-name'>
						Weight
						<br />
						Remaining
					</p>
					<p className='figure'>
						<strong>{(weightRemaining * 2.20462).toFixed(2)}</strong>
						{/* <strong>{(target.target_weight * 2.20462).toFixed(2)}</strong> */}
						<span> Lbs</span>
					</p>
					{/* {targets
					.sort((a, b) => {
						return new Date(a.createdAt) - new Date(b.createdAt);
					})[0]
					.target_weight.toFixed(2)}{' '}
				Kgs */}
				</div>
			</div>
			{/* <ProgressBarWidget percentage={percentage} /> */}
			{/* <div className='progress-bar-container'>
				<p>You have lost 20.30 Kgs</p>
				<progress value={percentage} max='100' className='progress' />
				<p>{percentage.toFixed(2)}% of goal reached</p>
			</div> */}
		</StyledWeightGoalsWidget>
	);
};
const StyledWeightGoalsWidget = styled.div`
	background: ${({ theme }) => theme.white};
	/* border-radius: 4px; */
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */

	display: flex;
	flex-direction: column;
	/* align-items: center; */
	justify-content: center;
	/* flex: 1; */
	row-gap: 1rem;
	.progress-widget-wrapper-container {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		/* justify-content: space-around; */
		.wrapper {
			background: ${({ theme }) => theme.white};
			border-radius: 4px;
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			width: 90px;
			p {
				text-align: center;
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.txtGrey};
			}
			p.stat-name {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.secondaryColor};
				/* color: ${({ theme }) => theme.txtGrey}; */
				text-transform: uppercase;
			}
		}
		.wrapper-icon {
			background: ${({ theme }) => theme.white};
			border-radius: 4px;
			padding: 0px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			/* width: 100px; */
			row-gap: 0.2rem;
			p {
				text-align: center;
				margin: 0;
			}
			p.figure {
				margin: 0;
				font-size: 1rem;
				color: ${({ theme }) => theme.txtGrey};
			}
			.arrow-icon {
				font-size: 2rem;
			}
			.arrow-icon.green {
				color: ${({ theme }) => theme.primaryColor};
			}
			.arrow-icon.red {
				color: ${({ theme }) => theme.error};
			}
			/* p.stat-name {
				margin: 0;
				font-size: 0.8em;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: uppercase;
			} */
		}
	}
`;

export default WeightGoalsWidget;
