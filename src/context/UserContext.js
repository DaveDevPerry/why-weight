import { useEffect } from 'react';
import { createContext, useReducer } from 'react';

export const UsersContext = createContext();

export const usersReducer = (state, action) => {
	switch (action.type) {
		case 'SET_USER':
			console.log(action.payload, 'payload');
			return {
				active_user: action.payload,
			};
		// case 'CREATE_TARGET':
		// 	return {
		// 		// ...state.workouts is previous state, action.payload is new workout to add
		// 		targets: [action.payload, ...state.targets],
		// 	};
		case 'UPDATE_USER':
			console.log(action.payload, 'user context');
			console.log(state, 'state, update user');

			return {
				...action.payload,
			};
		// return {
		// 	active_user: { ...state, ...action.payload },
		// };
		// return {
		// 	user: { ...state, ...action.payload },
		// };

		default:
			return state;
	}
};
// children represents everything the UsersContextProvider wraps
export const UsersContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(usersReducer, {
		active_user: null,
		// user: null,
	});
	useEffect(() => {
		// check is user in ls
		const user = JSON.parse(localStorage.getItem('user-why-weight'));
		console.log(user, 'user user context');
		if (user) {
			dispatch({ type: 'SET_USER', payload: user });
			console.log(user, 'user user context');
		}
	}, []);

	return (
		<UsersContext.Provider value={{ ...state, dispatch }}>
			{children}
		</UsersContext.Provider>
	);
};
