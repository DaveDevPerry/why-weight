import React from 'react';
import styled from 'styled-components';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
// import { ImArrowUp, ImArrowDown, ImArrowRight } from 'react-icons/im';
// import { FaCheck } from 'react-icons/fa';
// import ProgressBarWidget from './ProgressBarWidget';

const ParticipantProgressWidget = ({ weights }) => {
	return (
		<StyledParticipantProgressWidget className='progress-widget br'>
			<div className='progress-widget-wrapper-container'>
				<div className='wrapper'>
					<p className='figure'>
						<strong>
							{weights
								.sort((a, b) => {
									return new Date(a.createdAt) - new Date(b.createdAt);
								})[0]
								.load.toFixed(2)}
						</strong>
						<span> Kgs</span>
					</p>
					<p className='stat-name'>
						Initial
						<br />
						Weight
					</p>
					<p className='figure'>
						<strong>
							{(
								weights.sort((a, b) => {
									return new Date(a.createdAt) - new Date(b.createdAt);
								})[0].load * 2.20462
							).toFixed(2)}
						</strong>
						<span> Lbs</span>
					</p>
				</div>

				<div className='wrapper-icon'>
					<p className='figure'>
						<strong>
							{(
								weights[weights.length - 1].load -
								weights.sort((a, b) => {
									return new Date(a.createdAt) - new Date(b.createdAt);
								})[0].load
							).toFixed(2)}
						</strong>
						<span> Kgs</span>
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
						<strong>
							{(
								(weights[weights.length - 1].load -
									weights.sort((a, b) => {
										return new Date(a.createdAt) - new Date(b.createdAt);
									})[0].load) *
								2.20462
							).toFixed(2)}
						</strong>
						<span> Lbs</span>
					</p>
				</div>

				<div className='wrapper'>
					<p className='figure'>
						<strong>{weights[weights.length - 1].load.toFixed(2)}</strong>
						<span> Kgs</span>
					</p>
					<p className='stat-name'>
						Current
						<br />
						Weight
					</p>
					{/* <ImArrowUp className='arrow-icon' /> */}
					{/* <ImArrowDown className='arrow-icon' /> */}
					<p className='figure'>
						<strong>
							{(weights[weights.length - 1].load * 2.20462).toFixed(2)}
						</strong>
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
				</div>

				<div className='wrapper'>
					<p className='figure'>
						<strong>{target.target_weight.toFixed(2)}</strong>
						<span> Kgs</span>
					</p>
					<p className='stat-name'>
						Target
						<br />
						Weight
					</p>
					<p className='figure'>
						<strong>{(target.target_weight * 2.20462).toFixed(2)}</strong>
						<span> Lbs</span>
					</p>
				
				</div> */}
			</div>
		</StyledParticipantProgressWidget>
	);
};
const StyledParticipantProgressWidget = styled.div`
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
				font-size: 0.8em;
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

	/* .progress-bar-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex: 1;
		padding: 0 1rem;
		p {
			margin: 0;
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
	} */
`;

export default ParticipantProgressWidget;
