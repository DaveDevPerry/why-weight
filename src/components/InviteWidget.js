import React from 'react';
import styled from 'styled-components';
import { BsFillShareFill, BsWhatsapp } from 'react-icons/bs';

const InviteWidget = () => {
	const shareMobile = () => {
		const groupName = 'test group name';
		const groupPin = 'testgrouppin';

		window.open(
			`whatsapp://send?text=I have set up a group on Why Wait?  Would you like to join? Here are the group details.  GROUP NAME:${groupName}, PIN:${groupPin}. Sign up here - https://why-weight.vercel.app/signup`
		);
	};
	return (
		<StyledInviteWidget>
			{/* <div className='share-wrapper-whatsapp'> */}
			<button
				className='share-btn-whatsapp'
				onClick={() => {
					// playTile();
					shareMobile();
				}}
			>
				<BsFillShareFill size='20px' className='share-icon' />
				invite people to join
				<BsWhatsapp size='25px' className='share-icon' />
			</button>
			{/* </div> */}
		</StyledInviteWidget>
	);
};
const StyledInviteWidget = styled.div`
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

export default InviteWidget;
