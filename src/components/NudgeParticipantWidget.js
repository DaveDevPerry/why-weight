import React from 'react';
import styled from 'styled-components';
import { BsFillShareFill, BsWhatsapp } from 'react-icons/bs';
import { log } from '../helper';
// import { isMobile } from 'react-device-detect';

const NudgeParticipantWidget = ({ participant }) => {
	const shareMobile = () => {
		// if (
		// 	'https://c6c8j7x5.rocketcdn.me/Android|iPhone/i.test(navigator.userAgent)'
		// ) {
		// 	// This checks if the current device is in fact mobile
		// 	log('mobile device');
		// } else {
		// 	log('non mobile device');
		// }

		// const lastWeightDate = participant.weights[0].createdAt;
		// const groupPin = group.pinString;

		// if (isMobile) {
		// 	log('is mobile');

		log(`whatsapp://send?text=Friendly nudge to remind you to weigh in.`);

		// window.open(
		// 	`whatsapp://send?text=I have set up a group on Why Wait? Would you like to join? Create an account here - https://why-weight.vercel.app/signup and go to groups - join group and enter these details - GROUP NAME:${groupName}, PIN:${groupPin}.`
		// );
	};

	return (
		<StyledNudgeParticipantWidget className='br'>
			<button
				className='share-btn-whatsapp'
				onClick={() => {
					shareMobile();
				}}
			>
				<BsFillShareFill size='20px' className='share-icon' />
				<div className='btn-share-content'>
					<p>nudge</p>
					{/* <p>send weight reminder to</p> */}
					<h3>
						{participant && participant.first_name}{' '}
						{participant && participant.last_name}
					</h3>
				</div>
				<BsWhatsapp size='25px' className='share-icon' />
			</button>
		</StyledNudgeParticipantWidget>
	);
};
const StyledNudgeParticipantWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	/* border-radius: 4px; */
	/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
	display: flex;
	flex-direction: row;
	align-items: center;
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
		.btn-share-content {
		}
	}
	/* } */
`;

export default NudgeParticipantWidget;
