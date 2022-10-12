import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useStateContext } from '../lib/context';
// import { useGigsContext } from '../hooks/useGigsContext';
import { useAuthContext } from '../hooks/useAuthContext';
// import BandGigsList from '../components/BandGigsList';
// import { FaUsers } from 'react-icons/fa';
import { log } from '../helper';
import { useGroupsContext } from '../hooks/useGroupsContext';
// import InviteWidget from '../components/InviteWidget';
// import GroupParticipantsList from '../components/GroupParticipantsList';
import { useNavigate } from 'react-router-dom';
// import { format } from 'date-fns';
import { isMobile } from 'react-device-detect';
import ParticipantWeightsList from '../components/ParticipantWeightsList';
import NoUserWeightsWidget from '../components/NoUserWeightsWidget';
import NudgeParticipantWidget from '../components/NudgeParticipantWidget';
import ParticipantProgressWidget from '../components/ParticipantProgressWidget';
import ParticipantWeightUnitsWidget from '../components/ParticipantWeightUnitsWidget';

const Participant = () => {
	const { user } = useAuthContext();
	const { group, participant, dispatch } = useGroupsContext();
	const { participantToView } = useStateContext();
	// const { groupToView, participantToView } = useStateContext();

	const { dataLoaded } = useStateContext();
	// const { isFormActive, setIsFormActive } = useStateContext();

	let navigate = useNavigate();
	useEffect(() => {
		if (dataLoaded === false) {
			navigate('/');
		}
	}, [navigate, dataLoaded]);
	// const { groupToView, setGroupDetailsData, groupDetailsData } =
	// 	useStateContext();

	useEffect(() => {
		log(participantToView, ' participant in group');

		const fetchParticipant = async () => {
			const response = await fetch(
				`${process.env.REACT_APP_BACKEND_URL}/api/user/${participantToView}`
				// ,
				// {
				// 	headers: {
				// 		Authorization: `Bearer ${user.token}`,
				// 	},
				// }
			);
			const json = await response.json();
			log(json, 'json');
			const clonedUser = { ...json };
			log(clonedUser, 'cloned user');
			// clonedUser.weights.reverse();
			// clonedUser.weights.reverse();
			log(clonedUser, 'cloned user');

			// log(new Date(clonedUser.weights[0].createdAt), 'created at');
			// log(new Date(group.createdAt), 'created at group');

			const clonedWeights = [...clonedUser.weights];

			// filter weight dates after group start date
			const groupWeights = clonedWeights
				.sort((a, b) => {
					return new Date(b.createdAt) > new Date(a.createdAt);
				})
				.filter((weight) => {
					log(new Date(weight.createdAt), 'created at');
					log(new Date(group.createdAt), 'created at group');
					return new Date(weight.createdAt) > new Date(group.createdAt);
				});
			log(clonedUser, 'cloned user');
			log(clonedWeights, 'cloned user weights');
			log(groupWeights, 'groupWeights user weights');

			clonedUser.weights = groupWeights;
			log(clonedWeights, 'cloned user weights');
			// // filter weight dates after group start date
			// clonedUser.weights.filter((weight) => {
			// 	log(new Date(weight.createdAt), 'created at');
			// 	log(new Date(group.createdAt), 'created at group');
			// 	return new Date(weight.createdAt) < new Date(group.createdAt);
			// });
			// log(clonedUser, 'cloned user');
			// log(clonedUser.weights, 'cloned user weights');

			log(clonedUser, 'cloned user new');

			const weightMovement =
				groupWeights[0].load.toFixed(2) -
				groupWeights[groupWeights.length - 1].load.toFixed(2);
			log(weightMovement, 'weightMovement');
			log(parseInt(weightMovement), 'weightMovement');
			log(Number(weightMovement).toFixed(2), 'weightMovement');

			clonedUser.weightMovement = weightMovement;

			log(clonedUser, 'cloned user new');
			if (response.ok) {
				dispatch({ type: 'SET_PARTICIPANT', payload: clonedUser });
				// dispatch({ type: 'SET_PARTICIPANT', payload: clonedUser });
			}
		};
		if (user) {
			fetchParticipant();
		}
	}, [participantToView, dispatch, user]);

	// log(
	// 	group && group.chairperson_user_id,
	// 	user && user.userId,
	// 	'check for match'
	// );

	// log(groupDetailsData, 'group details data - Group');

	return (
		<StyledParticipant
			className='participant-page'
			initial={{ width: 0 }}
			animate={{ width: '100%' }}
			exit={{ x: window.innerWidth }}
		>
			<div className='full-header br'>
				<h3>
					{participant && participant.first_name}{' '}
					{participant && participant.last_name}
				</h3>
				{/* <h3>{group && group.title}</h3> */}
				{/* <p>
					weight status: {participant && participant.weightMovement.toFixed(2)}{' '}
					Kgs
				</p> */}
				{/* <p>
					chairperson: {group && group.chairperson_user_id.first_name}{' '}
					{group && group.chairperson_user_id.last_name}{' '}
				</p> */}
			</div>

			<ParticipantWeightUnitsWidget
				weight={participant && participant.weightMovement.toFixed(2)}
			/>

			{participant && participant.weights && participant.weights.length > 1 && (
				<ParticipantProgressWidget
					// key={target._id}
					// target={target}
					weights={participant.weights}
				/>
			)}
			{/* {group && (
				<div className='full-dates br'>
					<div className='group-details-dates-container'>
						<div className='dates-wrapper'>
							<p className='date-text'>start date:</p>
							<p className='date-date'>
								{format(new Date(group.createdAt), 'dd/MM/yyyy')}
							</p>
						</div>
						<div className='dates-wrapper'>
							<p className='date-text'>goal date:</p>
							<p className='date-date'>
								{format(new Date(group.target_date), 'dd/MM/yyyy')}
							</p>
						</div>
					</div>
					<div className='bottom-wrapper'>
						<p>reason / event:</p>
						<p>{group && group.target_reason}</p>
					</div>
				</div>
			)} */}

			{participant && participant.weights.length > 0 ? (
				<>
					{/* {' '}
					{participant && participant.weights.length >= 1 && (
						<NextWeighInReminderWidget reminderData={reminderData} />
					)} */}
					{/* <WeightUnitsWidget weights={weights} /> */}
					{/* {targets &&
						weights &&
						weights.length > 1 &&
						targets.map((target) => (
							<ProgressWidget
								key={target._id}
								target={target}
								weights={weights}
							/>
						))} */}
					{/* <WeightConvertor /> */}
					{/* <WeightsProgressWidget weights={weights} /> */}
					<ParticipantWeightsList
						weights={participant && participant.weights.reverse()}
					/>
				</>
			) : (
				<NoUserWeightsWidget
				// setCurrentFormOpen={setCurrentFormOpen}
				// handleFormChoice={handleFormChoice}
				/>
			)}

			{/* {group && participant && (
				<div className='participant-widget'>
					<p>{participant.first_name}</p>
				</div>
			)} */}
			{/* {group && group && <GroupParticipantsList group={group && group} />} */}

			{isMobile && (
				<>
					{group && group.chairperson_user_id._id === user.userId ? (
						<NudgeParticipantWidget participant={participant} />
					) : (
						<p className='dev-red br'>
							note for developers - user !chairperson so invite widget not
							displayed
						</p>
					)}
				</>
			)}
			{/* {isMobile ? (
				<>
					{group && group.chairperson_user_id._id === user.userId ? (
						<NudgeParticipantWidget participant={participant} />
					) : (
						<p className='dev-red br'>
							note for developers - user !chairperson so invite widget not
							displayed
						</p>
					)}
				</>
			) : (
				<p>not a mobile device</p>
			)} */}
		</StyledParticipant>
	);
};
const StyledParticipant = styled(motion.div)`
	display: flex;
	flex-direction: column;
	row-gap: 1rem;
	/* padding: 0.5rem; */
	max-width: 100rem;
	padding: 0.5rem 1rem;
	overflow: hidden;
	z-index: 1;
	transition: all 200ms linear;
	margin: 0 auto;
	flex: 1;
	/* flex: 1;
	max-width: 42rem;
	padding: 0.5rem;
	overflow: hidden;
	overflow-y: auto;
	transition: all 200ms linear;
	scroll-behavior: smooth;
	scroll-behavior: smooth;
	scrollbar-width: normal;
	scrollbar-color: ${({ theme }) => theme.primaryColor};
	::-webkit-scrollbar {
		width: 5px;
		background: rgb(75, 74, 74);
		user-select: none; 
		-webkit-user-select: none; 
		-khtml-user-select: none; 
		-moz-user-select: none; 
		-ms-user-select: none; 
	}
	::-webkit-scrollbar-thumb {
		background-color: ${({ theme }) => theme.primaryColor};
		-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
		box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
	}
	::-webkit-scrollbar-corner {
		background: rgb(75, 74, 74);
	} */
	.full-header {
		background: ${({ theme }) => theme.white};

		display: flex;

		align-items: center;
		flex-direction: column;
		/* flex: 1; */
		padding: 0.5rem 1rem;
		h3 {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 2rem;
			text-transform: capitalize;
		}

		.group-details-dates-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			column-gap: 1rem;
			/* flex: 1; */
			.dates-wrapper {
				display: flex;
				justify-content: flex-start;
				align-items: center;
				/* flex-direction: column; */
				flex-wrap: wrap;
				gap: 0.5rem;
				/* flex: 1; */
				.date-text {
					font-size: 1.4rem;
				}
				.date-date {
				}
			}
		}
		p {
			margin: 0;
			font-size: 1.6rem;
			color: ${({ theme }) => theme.txtGrey};
			text-transform: capitalize;
			font-weight: bold;
		}
	}
	.full-dates {
		background: ${({ theme }) => theme.white};
		/* border-radius: 4px; */
		/* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05); */
		display: flex;

		/* align-items: center; */
		flex-direction: column;
		row-gap: 0.5rem;
		flex: 1;
		padding: 1rem;
		h3 {
			color: ${({ theme }) => theme.secondaryColor};
			font-size: 2rem;
			text-transform: capitalize;
		}

		.group-details-dates-container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			flex-direction: row;
			column-gap: 1rem;
			flex: 1;
			.dates-wrapper {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				flex-wrap: wrap;
				/* gap: 0.5rem; */
				flex: 1;
				.date-text {
					font-size: 1.4rem;
					color: ${({ theme }) => theme.secondaryColor};
				}
				.date-date {
				}
			}
		}
		.bottom-wrapper {
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			border-top: 1px solid grey;
			padding-top: 0.5rem;
			p {
				margin: 0;
				font-size: 1.6rem;
				color: ${({ theme }) => theme.txtGrey};
				text-transform: capitalize;
				&:first-of-type {
					color: ${({ theme }) => theme.secondaryColor};
					font-size: 1.4rem;
				}
			}
		}
	}

	/* .band-gigs-list-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 1rem;
		border-bottom: 1px solid ${({ theme }) => theme.secondaryColor};
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
		}
	}
	ul.group-participants-list {
		list-style-type: disc;
		li {
			display: inline-block;
		}
	} */
`;

export default Participant;
