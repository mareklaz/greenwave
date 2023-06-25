import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Main from './pages/Main/Main';

import { Route, Routes } from 'react-router-dom';
import Solutions from './pages/Solutions/Solutions';
import Resources from './pages/Resources/Resources';
import Members from './pages/Members/Members';
import Individuals from './pages/Individuals/Individuals';
import Companies from './pages/Companies/Companies';

function App() {
	return (
		<>
			<Navbar />
			<div className='mt-16'>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/solutions' element={<Solutions />} />
					<Route path='/resources' element={<Resources />} />
					<Route path='/members' element={<Members />} />
					<Route path='/individuals' element={<Individuals />} />
					<Route path='/companies' element={<Companies />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
