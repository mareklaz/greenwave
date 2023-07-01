import { createContext, useEffect, useState } from 'react';

const DashboardContext = createContext();

export function DashboardContextProvider({ children }) {
	const [counter, setCounter] = useState(5);

	console.log('EL COUNTER DEL CONTEXT', counter);

	const value = {
		counter,
		setCounter,
	};

	return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export default DashboardContext;
