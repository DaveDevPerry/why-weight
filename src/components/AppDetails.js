import React, { useEffect } from 'react';
import styled from 'styled-components';

const AppDetails = ({ theme }) => {
	useEffect(() => {}, [theme]);
	// const theme = 'dark';
	return (
		<StyledAppDetails className='br'>
			<div
				className={theme && theme === 'light' ? 'label-img' : 'label-img dark'}
			></div>
			<div className='dev-link-container'>
				<p>developed by&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
				<a
					href='https://www.daveperry.tech'
					className='developer-link'
					rel='noopener noreferrer'
					target='_blank'
				>
					<Brand id='brand'>
						dave<span>perry</span>
						<span>.</span>tech
					</Brand>
				</a>
			</div>
			<div className='studio-img'></div>
		</StyledAppDetails>
	);
};
const StyledAppDetails = styled.div`
	display: flex;
	flex-direction: row;
	column-gap: 2rem;
	justify-content: space-between;
	/* display: flex;
	flex-direction: column; */
	padding: 1rem;
	/* padding: 2rem 1rem; */
	/* padding-bottom: 3rem; */
	background: ${({ theme }) => theme.white};
	/* border-radius: 4px; */
	/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
	transition: all 200ms linear;
	.dev-link-container {
		display: flex;
		flex-direction: column;
	}
	p {
		align-self: center;
		/* margin-top: 6rem; */
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtGrey};
	}
	a.developer-link {
		text-decoration: none;
		align-self: center;
		/* margin-top: 6rem; */
		font-size: 1.2rem;
		color: ${({ theme }) => theme.txtDarkGrey};
	}
	.label-img {
		background-image: url('KTMA_logo.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		/* aspect-ratio: 1; */
		transition: all 200ms linear;
	}
	.label-img.dark {
		background-image: url('KTMA_logo1.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		/* aspect-ratio: 1; */
		transition: all 200ms linear;
	}
	.studio-img {
		background-image: url('Rox_logo.webp');
		background-repeat: no-repeat;
		background-position: center;
		background-size: contain;
		width: 6rem;
		transition: all 200ms linear;
	}
`;

const Brand = styled.div`
	/* a { */
	font-family: 'Oswald', serif;
	font-size: 2.8rem;
	font-weight: lighter;
	/* color: white; */
	text-align: center;
	line-height: 1;
	span {
		font-weight: bolder;
	}
	span:last-child {
		/* color: red; */
		color: ${({ theme }) => theme.red};

		font-size: 5rem;
		line-height: 0;
		font-weight: bolder;
	}
	/* } */
`;

export default AppDetails;
