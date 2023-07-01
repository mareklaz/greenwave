import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/tailwind.css';
import './styles/main.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { DashboardContextProvider } from './context/DashboardContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<DashboardContextProvider>
		<Router>
			<App />
		</Router>
	</DashboardContextProvider>
);
