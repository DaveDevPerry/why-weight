import { WeightsContext } from '../context/WeightContext';
import { useContext } from 'react';

export const useWeightsContext = () => {
	const context = useContext(WeightsContext);

	if (!context) {
		throw Error(
			'useWeightsContext must be used inside a weights Context Provider'
		);
	}

	return context;
};
