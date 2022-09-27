import React, { createContext, useContext, useState } from 'react';
// import React, { createContext, useContext, useEffect, useState } from 'react';

// This is global state
const AppContext = createContext();

export const StateContext = ({ children }) => {
	// const [totalGigsPerBand, setTotalGigsPerBand] = useState(null);
	// const [totalGigsPerCity, setTotalGigsPerCity] = useState(null);

	const [dataLoaded, setDataLoaded] = useState(false);
	const [displayLoader, setDisplayLoader] = useState(true);

	const [isFormActive, setIsFormActive] = useState(false);

	const [groupToView, setGroupToView] = useState(null);
	const [groupDetailsData, setGroupDetailsData] = useState(null);

	// const [cityToView, setCityToView] = useState(null);
	// const [cityDetailsData, setCityDetailsData] = useState(null);

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
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useStateContext = () => useContext(AppContext);
