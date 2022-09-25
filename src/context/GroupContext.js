import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const GroupsContext = createContext();

export const groupsReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { group: action.payload };
		case 'LOGOUT':
			return { group: null };
		case 'SET_GROUPS':
			return {
				groups: action.payload,
			};
		case 'SET_GROUP':
			return {
				group: action.payload,
			};
		// case 'SET_GROUP':
		// 	return {
		// 		group: state.groups.filter((group) => group._id === action.payload._id),
		// 	};
		case 'CREATE_GROUP':
			return {
				// ...state.workouts is previous state, action.payload is new workout to add
				groups: [action.payload, ...state.groups],
			};
		case 'DELETE_GROUP':
			return {
				groups: state.groups.filter(
					(group) => group._id !== action.payload._id
				),
			};
		case 'UPDATE_GROUP':
			const clonedJson = action.payload;
			log(clonedJson, 'cloned json in group context');
			return {
				// groups: state.users.filter((user) => user._id === action.payload._id),
			};
		default:
			return state;
	}
};
// children represents everything the GroupsContextProvider wraps
export const GroupsContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(groupsReducer, {
		groups: null,
		group: null,
	});

	return (
		<GroupsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GroupsContext.Provider>
	);
};