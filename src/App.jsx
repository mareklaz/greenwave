import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer/Footer';
import Main from './pages/Main/Main';
import Solutions from './pages/Solutions/Solutions';
import Resources from './pages/Resources/Resources';
import Members from './pages/Members/Members';
import Individuals from './pages/Individuals/Individuals';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import Impact from './pages/Impact/Impact';
import HowItWorks from './pages/HowItWorks/HowItWorks';
import Contact from './pages/Contact/Contact';
import ImpactCases from './pages/Blog/ImpactCases';
import OceanCleanUp from './pages/Blog/OceanCleanUp';
import ScrollToTop from './components/ScrollToTop';
import Dashboard from './pages/Dashboard/Dashboard';
import DashboardContent from './pages/Dashboard/DashboardContent';
import DashboardButton from './pages/Dashboard/DasboardButton/DasboardButton';
import Api from './pages/Api/Api';

function App() {
	const location = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [location.pathname]);

	const isDashboard = location.pathname === '/dashboard';

	return (
		<>
			<ScrollToTop />
			{!isDashboard && <Navbar />}
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/solutions' element={<Solutions />} />
				<Route path='/resources' element={<Resources />} />
				<Route path='/members' element={<Members />} />
				<Route path='/individuals' element={<Individuals />} />
				<Route path='/how-it-works' element={<HowItWorks />} />
				<Route path='impact' element={<Impact />} />
				<Route path='impact/cases' element={<ImpactCases />} />
				<Route path='impact/cases/the-ocean-cleanup' element={<OceanCleanUp />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/api' element={<Api />} />
				<Route path='/dashboard/button' element={<DashboardButton />} />
				{isDashboard && (
					<Route
						path='/dashboard'
						element={
							<Dashboard>
								<DashboardContent />
							</Dashboard>
						}
					/>
				)}
			</Routes>
			{!isDashboard && <Footer />}
			{!isDashboard && <ScrollToTopButton />}
		</>
	);
}

export default App;
