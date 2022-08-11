import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WeightsContextProvider } from './context/WeightContext';
import { AuthContextProvider } from './context/AuthContext';
import { TargetsContextProvider } from './context/TargetContext';
import { GroupsContextProvider } from './context/GroupContext';
// import { UsersContextProvider } from './context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<AuthContextProvider>
			<GroupsContextProvider>
				{/* <UsersContextProvider> */}
				<TargetsContextProvider>
					<WeightsContextProvider>
						<App />
					</WeightsContextProvider>
				</TargetsContextProvider>
				{/* </UsersContextProvider> */}
			</GroupsContextProvider>
		</AuthContextProvider>
	</React.StrictMode>
);
