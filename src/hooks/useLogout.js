import { useStateContext } from '../lib/context';
import { useAuthContext } from './useAuthContext';
import { useGroupsContext } from './useGroupsContext';
import { useTargetsContext } from './useTargetsContext';
import { useUsersContext } from './useUserContext';
import { useWeightsContext } from './useWeightsContext';

export const useLogout = () => {
	const { dispatch } = useAuthContext();
	const { dispatch: weightsDispatch } = useWeightsContext();
	const { dispatch: targetsDispatch } = useTargetsContext();
	const { dispatch: groupsDispatch } = useGroupsContext();
	const { dispatch: userDispatch } = useUsersContext();
	const { setGroupToView } = useStateContext();

	const logout = () => {
		// remove user from storage
		localStorage.removeItem('user-why-weight');
		localStorage.removeItem('user-why-weight-group');

		// dispatch a logout action - no payload needed
		dispatch({ type: 'LOGOUT' });
		// clears global workout state so we don't see flash of last user workouts
		weightsDispatch({ type: 'SET_WEIGHTS', payload: null });
		targetsDispatch({ type: 'SET_TARGETS', payload: null });
		groupsDispatch({ type: 'SET_GROUP', payload: null });
		groupsDispatch({ type: 'SET_GROUPS', payload: null });
		userDispatch({ type: 'SET_USER', payload: null });
		setGroupToView(null);
	};

	return { logout };
};
