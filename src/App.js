import { BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';

// pages & components
// import Navbar from './components/Navbar';
import AnimatedRoutes from './AnimatedRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
import { StateContext } from './lib/context';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

function App() {
	const { user } = useAuthContext();

	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!mountedComponent) return <div id='unmounted'>Can i see this</div>;
	return (
		<ThemeProvider theme={themeMode}>
			<GlobalStyles />
			<StateContext>
				<div className='App'>
					<BrowserRouter>
						<Header />
						{/* <Navbar themeToggler={themeToggler} /> */}
						<div className='pages'>
							<AnimatedRoutes
								user={user}
								themeToggler={themeToggler}
								theme={theme}
							/>
							{/* <Routes>
						<Route
							path='/'
							element={user ? <Home /> : <Navigate to='/login' />}
						/>
						<Route
							path='/login'
							element={!user ? <Login /> : <Navigate to='/' />}
						/>
						<Route
							path='/signup'
							element={!user ? <Signup /> : <Navigate to='/' />}
						/>
					</Routes> */}
						</div>
						<Footer />
					</BrowserRouter>
				</div>
			</StateContext>
		</ThemeProvider>
	);
}

export default App;
