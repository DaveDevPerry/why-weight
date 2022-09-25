import { useState } from 'react';
// import { useAuthContext } from './useAuthContext';
import { useGroupsContext } from './useGroupsContext';

export const useSignupGroup = () => {
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);
	const { dispatch } = useGroupsContext();
	// const { dispatch } = useAuthContext();
	// const {user} = useAuthContext()

	const signup = async (title, pin, userID) => {
		setIsLoading(true);
		setError(null);
		// localhost is set as proxy in package.json
		// const response = await fetch('http://localhost:4000/api/user/signup')

		const response = await fetch(
			`${process.env.REACT_APP_BACKEND_URL}/api/groups/signup`,
			{
				// const response = await fetch('/api/user/signup', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, pin, userID }),
			}
		);
		// this will return the data as json or the error
		const json = await response.json();

		if (!response.ok) {
			setIsLoading(false);
			setError(json.error);
		}
		if (response.ok) {
			// save the user to local storage
			localStorage.setItem('user-why-weight-group', JSON.stringify(json));
			// update auth context with email
			dispatch({ type: 'LOGIN', payload: json });
			// update loading state to false as finished
			setIsLoading(false);
		}
	};

	return { signup, isLoading, error };
};
