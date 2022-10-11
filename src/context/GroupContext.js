import { createContext, useReducer } from 'react';
import { log } from '../helper';

export const GroupsContext = createContext();

export const groupsReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			log(action.payload, 'group login payload');
			return { group: action.payload };
		case 'LOGOUT':
			return { group: null };
		case 'SET_GROUPS':
			log(action.payload, 'group set groups payload');
			return {
				...state,
				groups: action.payload,
			};
		case 'SET_GROUP':
			log(action.payload, 'group set group payload');
			return {
				...state,
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
		case 'SET_PARTICIPANTS':
			log(action.payload, 'group set participants payload');
			return {
				...state,
				participants: action.payload,
			};
		case 'SET_PARTICIPANT':
			log(action.payload, 'group set participant payload');
			return {
				...state,
				participant: action.payload,
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
		participant: null,
		participants: null,
	});

	return (
		<GroupsContext.Provider value={{ ...state, dispatch }}>
			{children}
		</GroupsContext.Provider>
	);
};
