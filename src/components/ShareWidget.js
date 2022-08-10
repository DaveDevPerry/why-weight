import React from 'react';
import styled from 'styled-components';
import { BsFillShareFill, BsWhatsapp } from 'react-icons/bs';

const ShareWidget = ({ targets, weights }) => {
	const shareMobile = () => {
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
		// const gameType = 'anagram round';
		// const gameScore = document.querySelector(
		// 	'#share-anagram-points'
		// ).textContent;
		window.open(
			`whatsapp://send?text=I have lost ${weightFluctuation} Kgs, which means I have achieved ${progressPercentage} % of my target weight loss!  How are you getting on?`
		);
	};
	return (
		<StyledShareWidget>
			{/* <div className='share-wrapper-whatsapp'> */}
			<button
				className='share-btn-whatsapp'
				onClick={() => {
					// playTile();
					shareMobile();
				}}
			>
				<BsFillShareFill size='20px' className='share-icon' />
				motivate my friends
				<BsWhatsapp size='25px' className='share-icon' />
			</button>
			{/* </div> */}
		</StyledShareWidget>
	);
};
const StyledShareWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	/* padding: 1rem 2rem; */
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: row;
	/* justify-content: center; */
	align-items: center;
	/* row-gap: 1rem; */
	/* .share-wrapper-whatsapp {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-around;
		row-gap: 2rem;

		flex: 1; */
	.share-btn-whatsapp {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		letter-spacing: 2px;
		font-size: 1.6rem;
		padding: 1rem 2rem;
		background-color: ${({ theme }) => theme.white};
		border: none;
		border-radius: 5px;
		color: ${({ theme }) => theme.secondaryColor};
		font-weight: bold;
		cursor: pointer;
		/* padding: 0.2rem 1rem; */
		column-gap: 1rem;
		flex: 1;
		font-style: italic;
		.share-icon {
			color: ${({ theme }) => theme.primaryColor};
		}
	}
	/* } */
`;

export default ShareWidget;
