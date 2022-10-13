// import {
// 	differenceInCalendarDays,
// 	isMonday,
// 	isSunday,
// 	nextMonday,
// } from 'date-fns';
import React, { createContext, useContext, useState } from 'react';
// import { log } from '../helper';
// import { useWeightsContext } from '../hooks/useWeightsContext';
// import React, { createContext, useContext, useEffect, useState } from 'react';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	// const { weights } = useWeightsContext();
	// const [totalGigsPerBand, setTotalGigsPerBand] = useState(null);
	// const [totalGigsPerCity, setTotalGigsPerCity] = useState(null);

	const [dataLoaded, setDataLoaded] = useState(false);
	const [displayLoader, setDisplayLoader] = useState(true);

	const [isFormActive, setIsFormActive] = useState(false);

	const [groupToView, setGroupToView] = useState(null);
	const [groupDetailsData, setGroupDetailsData] = useState(null);

	const [participantToView, setParticipantToView] = useState(null);

	// const [cityToView, setCityToView] = useState(null);
	// const [cityDetailsData, setCityDetailsData] = useState(null);
	const [reminderData, setReminderData] = useState({
		message: '',
	});

	const [unitMode, setUnitMode] = useState(null);
	const [defaultUnitViewMode, setDefaultUnitViewMode] = useState(null);
	// const getReminderStatus = (weights) => {
	// 	log(weights, 'weights in context');
	// 	const lastWeightRecord = weights && weights[0];
	// 	// const lastWeightRecord = weights && weights[weights.length - 1];
	// 	// const lastWeight = lastWeightRecord.load;
	// 	// log(lastWeight, 'last weight');
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
	// 		setReminderData({
	// 			...reminderData,
	// 			message: "don't forget to weigh yourself tomorrow",
	// 		});
	// 	}
	// 	if (isTodayMonday === true) {
	// 		log('today is monday');
	// 		setReminderData({
	// 			...reminderData,
	// 			message: "don't forget to weigh yourself today",
	// 		});
	// 	}
	// };

	return (
		<AppContext.Provider
			value={{
				dataLoaded,
				setDataLoaded,
				displayLoader,
				setDisplayLoader,
				isFormActive,
				setIsFormActive,
				setGroupToView,
				groupToView,
				setGroupDetailsData,
				groupDetailsData,
				participantToView,
				setParticipantToView,
				// getReminderStatus,
				reminderData,
				setReminderData,
				unitMode,
				setUnitMode,
				defaultUnitViewMode,
				setDefaultUnitViewMode,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => useContext(AppContext);
