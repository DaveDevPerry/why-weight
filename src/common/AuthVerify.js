import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
// import { log } from '../helper';
import { useLogout } from '../hooks/useLogout';

const parseJwt = (token) => {
	// log(token, ' token auth verify 2');
	try {
		return JSON.parse(atob(token.split('.')[1]));
	} catch (e) {
		return null;
	}
};

const AuthVerify = () => {
	// const AuthVerify = (props) => {
	const { logout } = useLogout();
	let location = useLocation();

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user-why-weight'));
		// log(user, ' auth verify 1');
		if (user) {
			const decodedJwt = parseJwt(user.token);
			// const decodedJwt = parseJwt(user.accessToken);
			// log(user, ' auth verify 2');
			// log(decodedJwt, ' decodedJwt verify 2');
			// new Date('December 17, 1995 03:24:00')
			// log(new Date(Date.now() + 4000), 'date now');
			if (decodedJwt.exp * 1000 < Date.now() + 4000) {
				// if (decodedJwt.exp * 1000 < new Date('October 10, 2022')) {
				// if (decodedJwt.exp * 1000 < Date.now('11 Oct, 2022')) {
				// log(decodedJwt.exp, ' decodedJwt verify 3');
				logout();
				// log(user, ' auth verify 3');
			}
			// log(decodedJwt.exp, ' decodedJwt verify 4');
		}
	}, [location]);

	return;
};

export default AuthVerify;
