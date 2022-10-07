import React from 'react';
import styled from 'styled-components';

const ParticipantWeightUnitsWidget = ({ weight }) => {
	return (
		<StyledParticipantWeightUnitsWidget>
			<div className='wrapper br'>
				<p className='figure'>
					<strong>{weight}</strong>
				</p>
				<p className='stat-name'>Kgs</p>
			</div>
			<div className='wrapper br'>
				<p className='figure'>
					<strong>{(weight * 0.157473).toFixed(2)}</strong>
				</p>
				<p className='stat-name'>Stones</p>
			</div>
			<div className='wrapper br'>
				<p className='figure'>
					<strong>{(weight * 2.20462).toFixed(2)}</strong>
				</p>
				<p className='stat-name'>Lbs</p>
			</div>
		</StyledParticipantWeightUnitsWidget>
	);
};
const StyledParticipantWeightUnitsWidget = styled.div`
	/* background: ${({ theme }) => theme.white}; */
	/* border-radius: 4px; */
	/* padding: 1rem; */
	/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	flex: 1;
	column-gap: 1rem;
	padding: 0.5rem;
	.wrapper {
		background: ${({ theme }) => theme.white};
		border-radius: 4px;
		padding: 0.5rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		/* width: 90px; */
		flex: 1;
		p {
			text-align: center;
			margin: 0;
		}
		p.figure {
			margin: 0;
			font-size: 1.6rem;
			color: ${({ theme }) => theme.txtGrey};
		}
		p.stat-name {
			margin: 0;
			font-size: 1.6rem;
			color: ${({ theme }) => theme.secondaryColor};
			/* color: ${({ theme }) => theme.txtGrey}; */
			text-transform: capitalize;
			line-height: 1;
		}
	}
`;

export default ParticipantWeightUnitsWidget;
