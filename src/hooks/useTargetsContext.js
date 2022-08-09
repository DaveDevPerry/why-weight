import { TargetsContext } from '../context/TargetContext';
import { useContext } from 'react';

export const useTargetsContext = () => {
	const context = useContext(TargetsContext);

	if (!context) {
		throw Error(
			'useTargetsContext must be used inside a targets Context Provider'
		);
	}

	return context;
};
