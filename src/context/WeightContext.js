import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const WeightsContext = createContext();

export const weightsReducer = (state, action) => {
	switch (action.type) {
		case 'SET_WEIGHTS':
			log(action.payload, 'set weights');
			const sortedWeights =
				action.payload === null
					? null
					: action.payload.sort((a, b) => {
							return new Date(a.createdAt) - new Date(b.createdAt);
					  });
			log(sortedWeights, 'sorted weights context set weights');
			return {
				weights: sortedWeights,
				// weights: action.payload,
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
