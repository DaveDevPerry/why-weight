import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { log } from '../helper';
import WeightDetails from './WeightDetails';

const WeightsList = ({ weights }) => {
	const [testWeights, setTestWeights] = useState('');
	// const weightDiffs = [];
	useEffect(() => {
		const clonedWeights = [...weights];
		// clonedWeights.reverse();
		// log(clonedWeights, 'cloned reversed');
		const weightDiffs = [];

		for (let i = 0; i < clonedWeights.length - 1; i++) {
			const diff = clonedWeights[i].load - clonedWeights[i + 1].load;
			// const diff = clonedWeights[i + 1].load - clonedWeights[i].load;
			weightDiffs.push(diff.toFixed(2));
			// weightDiffs.unshift(diff.toFixed(2));
		}
		setTestWeights(weightDiffs);
		log(clonedWeights, 'cloned');
		log(weightDiffs, 'weight diffs');
	}, [weights]);
	return (
		<StyledWeightsList className='weight-list-container'>
			{/* <p className='weights-list-header'>Recorded weigh-ins</p> */}
			<div className='weights-list'>
				{weights &&
					testWeights &&
					weights.map((weight, index) => (
						<WeightDetails
							key={weight._id}
							weight={weight}
							difference={testWeights[index]}
						/>
					))}
			</div>
			{/* <div className='weights-list'>
				{weights &&
					weights.map((weight) => (
						<WeightDetails key={weight._id} weight={weight} />
					))}
			</div> */}
		</StyledWeightsList>
	);
};
const StyledWeightsList = styled.div`
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
		/* overflow-y: auto; */
		/* overflow-y: hidden; */
		overflow-y: scroll;
	}
`;

export default WeightsList;
