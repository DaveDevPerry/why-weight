import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { log } from '../helper';
import WeightDetails from './WeightDetails';
import { FaUsers } from 'react-icons/fa';
import { useWeightsContext } from '../hooks/useWeightsContext';

const WeightsList = () => {
	const [testWeights, setTestWeights] = useState('');
	const { weights } = useWeightsContext();
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
	}, []);
	return (
		<StyledWeightsList className='weight-list-container'>
			{/* <p className='weights-list-header'>Recorded weigh-ins</p> */}
			<div className='weight-history-list-header'>
				<p>Weight history</p>
				<div>
					<FaUsers className='nav-icon' />
					{weights && weights.length}
				</div>
			</div>
			<div className='weights-list-container'>
				<div className='weights-list'>
					{weights &&
						testWeights &&
						weights
							.sort((a, b) => {
								return new Date(b.createdAt) - new Date(a.createdAt);
							})
							.map((weight, index) => (
								<WeightDetails
									key={weight._id}
									weight={weight}
									difference={testWeights[index]}
								/>
							))}
				</div>
			</div>
			{/* <div className='weights-list'>
				{weights &&
					testWeights &&
					weights.map((weight, index) => (
						<WeightDetails
							key={weight._id}
							weight={weight}
							difference={testWeights[index]}
						/>
					))}
			</div> */}
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
	overflow-y: auto;
	/* flex: 1; */
	display: flex;
	flex-direction: column;
	/* border: 1px solid green; */
	.weight-history-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 0.5rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
		margin-bottom: 0.5rem;
		p {
			color: ${({ theme }) => theme.secondaryColor};
			font-weight: bold;
			span {
				text-transform: capitalize;
			}
		}
		div {
			display: flex;
			justify-content: space-between;
			align-items: center;
			column-gap: 0.5rem;
			color: ${({ theme }) => theme.txtGrey};
			font-weight: bold;
			.nav-icon {
				color: ${({ theme }) => theme.secondaryColor};
			}
		}
	}
	.weights-list-container {
		/* overflow-y: auto; */
		/* flex: 1; */
		overflow-y: auto;
		/* border: 1px solid; */
		scroll-behavior: smooth;
		.weights-list {
			display: flex;
			flex-direction: column;
			/* flex: 1; */
			row-gap: 0.3rem;
			/* overflow-y: scroll; */
		}
	}
	/* .weights-list {
		display: flex;
		flex-direction: column;
		flex: 1;
		row-gap: 0.3rem;
		overflow-y: scroll;
	} */

	/* .weights-list {
		display: flex;
		flex-direction: column;
		flex: 1;
		row-gap: 0.3rem;
		overflow-y: scroll;
	} */
`;

export default WeightsList;
