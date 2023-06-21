import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar';
import Main from './pages/Main/Main';

import { Route, Routes } from 'react-router-dom';
import Solutions from './pages/Solutions/Solutions';
import Resources from './pages/Resources/Resources';
import Members from './pages/Members/Members';

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
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
