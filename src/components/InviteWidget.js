import React from 'react';
import styled from 'styled-components';
import { BsFillShareFill, BsWhatsapp } from 'react-icons/bs';
import { log } from '../helper';
// import { isMobile } from 'react-device-detect';

const InviteWidget = ({ group }) => {
	const shareMobile = () => {
		// if (
		// 	'https://c6c8j7x5.rocketcdn.me/Android|iPhone/i.test(navigator.userAgent)'
		// ) {
		// 	// This checks if the current device is in fact mobile
		// 	log('mobile device');
		// } else {
		// 	log('non mobile device');
		// }

		const groupName = group.title;
		const groupPin = group.pinString;

		// if (isMobile) {
		// 	log('is mobile');

		log(
			`whatsapp://send?text=I have set up a group on Why Weight? Would you like to join? Create an account here - https://why-weight.vercel.app/signup and go to groups - join group and enter these details - GROUP NAME:${groupName}, PIN:${groupPin}.`
		);

		window.open(
			`whatsapp://send?text=I have set up a group on Why Weight? Would you like to join?  - https://why-weight.vercel.app/groups/login - join group and enter these details - GROUP NAME:${groupName}, PIN:${groupPin}.`
		);
		// } else {
		// 	log('is not mobile');
		// }
	};

	// renderContent = () => {
	//   if (isMobile) {
	// 		const shareMobile = () => {
	// 			const groupName = group.title;
	// 			const groupPin = group.pinString;

	// 			log(
	// 				`whatsapp://send?text=I have set up a group on Why Wait? Would you like to join? Create an account here - https://why-weight.vercel.app/signup and go to groups - join group and enter these details - GROUP NAME:${groupName}, PIN:${groupPin}.`
	// 			);

	// 			window.open(
	// 				`whatsapp://send?text=I have set up a group on Why Wait? Would you like to join? Create an account here - https://why-weight.vercel.app/signup and go to groups - join group and enter these details - GROUP NAME:${groupName}, PIN:${groupPin}.`
	// 			);
	// 			// window.open(
	// 			// 	`whatsapp://send?text=I have set up a group on Why Wait?  Would you like to join? Here are the group details.  GROUP NAME:${groupName}, PIN:${groupPin}. Sign up here - https://why-weight.vercel.app/signup`
	// 			// );
	// 		};
	//     return (	<StyledInviteWidget className='br'>
	// 		<button
	// 			className='share-btn-whatsapp'
	// 			onClick={() => {
	// 				shareMobile();
	// 			}}
	// 		>
	// 			<BsFillShareFill size='20px' className='share-icon' />
	// 			<div className='btn-share-content'>
	// 				<p>invite people to join</p>
	// 				<h3>{group && group.title}</h3>
	// 			</div>
	// 			<BsWhatsapp size='25px' className='share-icon' />
	// 		</button>
	// 	</StyledInviteWidget>)
	//   }
	//   return (	<StyledInviteWidget className='br'>
	// 	<button
	// 		className='share-btn-whatsapp'
	// 		onClick={() => {
	// 			// shareMobile();
	// 		}}
	// 	>
	// 		<BsFillShareFill size='20px' className='share-icon' />
	// 		<div className='btn-share-content'>
	// 			<p>non mobile device</p>
	// 			{/* <h3>{group && group.title}</h3> */}
	// 		</div>
	// 		<BsWhatsapp size='25px' className='share-icon' />
	// 	</button>
	// </StyledInviteWidget>)
	// };

	// render() {
	//   return this.renderContent();
	// };

	return (
		<StyledInviteWidget className='br'>
			{/* <div className='share-wrapper-whatsapp'> */}
			<button
				className='share-btn-whatsapp'
				onClick={() => {
					// playTile();
					shareMobile();
				}}
			>
				<BsFillShareFill size='20px' className='share-icon' />
				<div className='btn-share-content'>
					<p>invite people to join</p>
					<h3>{group && group.title}</h3>
				</div>
				<BsWhatsapp size='25px' className='share-icon' />
			</button>
			{/* </div> */}
		</StyledInviteWidget>
	);
};
const StyledInviteWidget = styled.div`
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
		padding: 0.5rem 1rem;
		/* padding: 1rem 2rem; */
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

export default InviteWidget;
