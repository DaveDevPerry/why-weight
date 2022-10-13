import React from 'react';
import { func, string } from 'prop-types';
// import { MdDarkMode, MdLightMode } from 'react-icons/md';
import styled from 'styled-components';
import { CgToggleSquareOff, CgToggleSquare } from 'react-icons/cg';

const Toggle = ({ toggleTheme, theme }) => {
	return (
		<StyledToggle
			id='toggle-switch'
			onClick={toggleTheme}
			className='toggle-icon'
		>
			<p>colour theme:</p>
			{theme === 'light' ? (
				<CgToggleSquare className='mode-toggle-icons' />
			) : (
				<CgToggleSquareOff className='mode-toggle-icons' />
			)}
			<span>{theme && theme}</span>
			{/* Dark mode:
			{theme === 'light' ? (
				<CgToggleSquare className='mode-toggle-icons' />
			) : (
				<CgToggleSquareOff className='mode-toggle-icons' />
			)} */}
		</StyledToggle>
		// {/* <StyledToggle
		// 	id='toggle-switch'
		// 	onClick={toggleTheme}
		// 	className='toggle-icon'
		// >
		// 	Theme Mode:
		// 	{theme === 'light' ? (
		// 		<MdDarkMode className='mode-toggle-icons' />
		// 	) : (
		// 		<MdLightMode className='mode-toggle-icons' />
		// 	)}
		// </StyledToggle> */}
	);
};
const StyledToggle = styled.div`
	/* border: 1px solid; */
	/* padding: 0rem 0.5rem; */
	display: flex;
	justify-content: flex-start;
	align-items: center;
	column-gap: 1rem;
	color: ${({ theme }) => theme.txtGrey};
	/* font-size: 1.4rem; */
	/* font-weight: bold; */
	p {
		/* color: ${({ theme }) => theme.secondaryColor}; */
		font-size: 1.4rem;
		font-weight: bold;
		width: 11rem;
		text-align: right;
	}
	span {
		color: ${({ theme }) => theme.secondaryColor};
		font-size: 1.4rem;
		font-weight: lighter;
	}
	.mode-toggle-icons {
		cursor: pointer;
		font-size: 3rem;
		color: ${({ theme }) => theme.modeIcon};
	}
`;
Toggle.propTypes = {
	theme: string.isRequired,
	toggleTheme: func.isRequired,
};
export default Toggle;
