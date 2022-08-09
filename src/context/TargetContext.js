import { createContext, useReducer } from 'react';

export const TargetsContext = createContext();

export const targetsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_TARGETS':
			return {
				targets: action.payload,
			};
		case 'CREATE_TARGET':
			return {
				// ...state.workouts is previous state, action.payload is new workout to add
				targets: [action.payload, ...state.targets],
			};
		case 'DELETE_TARGET':
			return {
				targets: state.targets.filter(
					(target) => target._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};
// children represents everything the TargetsContextProvider wraps
export const TargetsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(targetsReducer, {
		targets: null,
	});

	return (
		<TargetsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</TargetsContext.Provider>
	);
};
