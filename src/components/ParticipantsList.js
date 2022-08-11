import React from 'react';
// import { useState } from 'react';
// import { useEffect } from 'react';
import styled from 'styled-components';
import ParticipantCard from './ParticipantCard';
// import participantDetails from './participantDetails';

const ParticipantsList = ({ group }) => {
	// const [testWeights, setTestWeights] = useState('');
	// const weightDiffs = [];
	// useEffect(() => {
	// 	const clonedWeights = [...weights];
	// 	// clonedWeights.reverse();
	// 	// console.log(clonedWeights, 'cloned reversed');
	// 	const weightDiffs = [];

	// 	for (let i = 0; i < clonedWeights.length - 1; i++) {
	// 		const diff = clonedWeights[i].load - clonedWeights[i + 1].load;
	// 		// const diff = clonedWeights[i + 1].load - clonedWeights[i].load;
	// 		weightDiffs.push(diff.toFixed(2));
	// 		// weightDiffs.unshift(diff.toFixed(2));
	// 	}
	// 	setTestWeights(weightDiffs);
	// 	console.log(clonedWeights, 'cloned');
	// 	console.log(weightDiffs, 'weight diffs');
	// }, [weights]);
	return (
		<StyledParticipantsList className='participant-list-container'>
			<p className='participants-list-header'>Group Participants</p>
			<div className='participants-list'>
				{group &&
					group.participants.map((participant, index) => (
						<ParticipantCard key={index} participant={participant} />
					))}
				{/* <ParticipantCard participant={'carol'} /> */}
			</div>
			{/* <div className='participants-list'>
				{group.participants &&
					group.participants.map((participant, index) => (
						<ParticipantCard key={participant._id} participant={participant} />
					))}
			</div> */}
		</StyledParticipantsList>
	);
};
const StyledParticipantsList = styled.div`
	/* overflow-y: auto; */
	flex: 1;
	p.participants-list-header {
		padding: 0 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.txtGrey};
		margin-bottom: 0.5rem;
		font-size: 0.9em;
	}
	.participants-list {
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

export default ParticipantsList;
