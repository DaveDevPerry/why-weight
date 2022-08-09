import React from 'react';
import styled from 'styled-components';
import WeightDetails from './WeightDetails';

const WeightsList = ({ weights }) => {
	return (
		<StyledWeightsList className='weight-list-container'>
			{/* <p className='weights-list-header'>Recorded weigh-ins</p> */}
			<div className='weights-list'>
				{weights &&
					weights.map((weight) => (
						<WeightDetails key={weight._id} weight={weight} />
					))}
			</div>
		</StyledWeightsList>
	);
};
const StyledWeightsList = styled.div`
	/* display: flex;
	flex-direction: column;
	row-gap: 0.3rem; */
	/* overflow: hidden; */
	/* overflow-y: auto; */
	flex: 1;
	p.weights-list-header {
		padding: 0 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 0.9em;
	}
	.weights-list {
		/* border: 2px solid blue; */
		display: flex;
		flex-direction: column;
		flex: 1;
		row-gap: 0.3rem;
		/* overflow-y: scroll; */
		overflow-y: hidden;
	}
`;

export default WeightsList;
