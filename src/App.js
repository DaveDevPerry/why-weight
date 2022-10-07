import { BrowserRouter } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './components/useDarkMode';
import { GlobalStyles } from './components/globalStyles';
import { lightTheme, darkTheme } from './components/Themes';

// pages & components
import AnimatedRoutes from './AnimatedRoutes';
import Footer from './components/Footer';
import Header from './components/Header';
import { StateContext } from './lib/context';
import { Toaster } from 'react-hot-toast';

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
						<Toaster />
						<Header />
						{/* <div className='pages'> */}
						<AnimatedRoutes
							user={user}
							themeToggler={themeToggler}
							theme={theme}
						/>
						{/* </div> */}
						<Footer />
					</BrowserRouter>
				</div>
			</StateContext>
		</ThemeProvider>
	);
}

export default App;
