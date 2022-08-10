import React from 'react';
import styled from 'styled-components';

const WeightsProgressWidget = ({ weights }) => {
	return (
		<StyledWeightsProgressWidget>
			<p className='weights-list-header'>Recorded weigh-ins</p>
		</StyledWeightsProgressWidget>
	);
};
const StyledWeightsProgressWidget = styled.div`
	color: ${({ theme }) => theme.txtGrey};
	background: ${({ theme }) => theme.white};
	border-radius: 4px;
	/* margin: 0 auto 10px auto; */
	padding: 1rem;
	box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	column-gap: 1rem;
	p.weights-list-header {
		/* padding: 0 1rem; */
		/* border-bottom: 1px solid ${({ theme }) => theme.txtGrey}; */
		/* margin-bottom: 0.5rem; */
		font-size: 0.9em;
	}
`;

export default WeightsProgressWidget;
