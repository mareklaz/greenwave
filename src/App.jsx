import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Main from './pages/Main/Main';

import { Route, Routes, ScrollRestoration } from 'react-router-dom';
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

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/solutions' element={<Solutions />} />
				<Route path='/resources' element={<Resources />} />
				<Route path='/members' element={<Members />} />
				<Route path='/individuals' element={<Individuals />} />
				<Route path='/how-it-works' element={<HowItWorks />} />
				<Route path='/impact' element={<Impact />} />
				<Route path='/impact/cases' element={<ImpactCases />} />
				<Route path='/impact/cases/the-ocean-cleanup' element={<OceanCleanUp />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
			<ScrollToTopButton />
		</div>
	);
}

export default App;
