import { createContext, useReducer } from 'react';

export const WeightsContext = createContext();

export const weightsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_WEIGHTS':
			return {
				weights: action.payload,
			};
		case 'CREATE_WEIGHT':
			return {
				// ...state.workouts is previous state, action.payload is new workout to add
				weights: [action.payload, ...state.weights],
			};
		case 'DELETE_WEIGHT':
			return {
				weights: state.weights.filter(
					(weight) => weight._id !== action.payload._id
				),
			};
		default:
			return state;
	}
};
// children represents everything the WeightsContextProvider wraps
export const WeightsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(weightsReducer, {
		weights: null,
	});

	return (
		<WeightsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</WeightsContext.Provider>
	);
};
