// import { createContext, useReducer } from 'react';
import { createContext, useReducer, useEffect } from 'react';
import { log } from '../helper';

export const AuthContext = createContext();

export const authReducer = (state, action) => {
	switch (action.type) {
		case 'LOGIN':
			return { user: action.payload };
		case 'LOGOUT':
			return { user: null };
		default:
			return state;
	}
};

export const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(authReducer, {
		user: null,
	});

	useEffect(() => {
		// check is user in ls
		const user = JSON.parse(localStorage.getItem('user-why-weight'));
		log(user, 'user auth context use effect');

		if (user) {
			// localStorage.removeItem('user-why-weight');
			dispatch({ type: 'LOGIN', payload: user });
		}
	}, []);

	// useEffect(() => {
	// 	// check is user in ls
	// 	const user = JSON.parse(localStorage.getItem('user-why-weight'));
	// 	log(user, 'user auth context use effect');

	// 	if (user) {
	// 		dispatch({ type: 'LOGIN', payload: user });
	// 	}
	// }, []);

	// log('AuthContext state: ', state);

	return (
		<AuthContext.Provider value={{ ...state, dispatch }}>
			{children}
		</AuthContext.Provider>
	);
};
