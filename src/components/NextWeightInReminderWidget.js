// import {
// 	differenceInCalendarDays,
// 	isMonday,
// 	isSunday,
// 	nextMonday,
// } from 'date-fns';
// import React, { useEffect } from 'react';
import styled from 'styled-components';
// import { useStateContext } from '../lib/context';
// import { log } from '../helper';
// import { useWeightsContext } from '../hooks/useWeightsContext';

const NextWeighInReminderWidget = ({ reminderData }) => {
	// const { weights } = useWeightsContext();
	// const { reminderData } = useStateContext();

	// useEffect(() => {
	// const getReminderStatus = () => {
	// 	const lastWeightRecord = weights[weights.length - 1];
	// 	const lastWeight = lastWeightRecord.load;
	// 	log(lastWeight, 'last weight');
	// 	const lastWeightDate = lastWeightRecord.createdAt;
	// 	log(lastWeightDate, 'lastWeightDate');
	// 	// const currentDay =
	// 	const isTodaySunday = isSunday(new Date());
	// 	log(isTodaySunday, ' isTodaySunday');
	// 	const isTodayMonday = isMonday(new Date());
	// 	log(isTodayMonday, 'isTodayMonday');
	// 	const nextMondayDate = nextMonday(new Date());
	// 	log(nextMondayDate, 'nextMondayDate');

	// 	const daysToNextWeighIn = differenceInCalendarDays(
	// 		new Date(nextMondayDate),
	// 		new Date()
	// 	);

	// 	log(daysToNextWeighIn, 'days to next monday');
	// 	// const daysOverdue =

	// 	if (isTodaySunday === true) {
	// 		log('today is sunday');
	// 	}
	// 	if (isTodayMonday === true) {
	// 		log('today is monday');
	// 	}
	// };
	// 	getReminderStatus();
	// }, [weights]);
	return (
		<StyledNextWeighInReminderWidget className='br'>
			{/* {isTodaySunday === true && (<p>today is sunday</p>)} */}
			{/* <p>{reminderData && reminderData.message}</p> */}
			<p>
				<span>{reminderData && reminderData.days} </span>
				{reminderData && reminderData.message}
			</p>
		</StyledNextWeighInReminderWidget>
	);
};

const StyledNextWeighInReminderWidget = styled.div`
	background-color: ${({ theme }) => theme.white};
	padding: 0.5rem 1rem;
	p {
		color: ${({ theme }) => theme.txtGrey};
		text-align: center;
		span {
			color: ${({ theme }) => theme.secondaryColor};
		}
	}
`;

export default NextWeighInReminderWidget;
