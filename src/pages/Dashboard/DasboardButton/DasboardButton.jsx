import { useContext } from 'react';
import SectionHeader from '../../../components/SectionHeader/SectionHeader';
import DashboardContext from '../../../context/DashboardContext';

export default function DashboardButton() {
	const { counter, setCounter } = useContext(DashboardContext);

	console.log('Counter en Button', counter);

	const incrementCounter = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};

	const incrementCounterByTen = () => {
		setCounter((prevCounter) => prevCounter + 10);
	};

	return (
		<>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					Agregar: {counter}
				</h2>
				<button
					onClick={incrementCounter}
					type='button'
					className='mx-4 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
					Agregar + 1
				</button>
				<button
					onClick={incrementCounterByTen}
					type='button'
					className='mx-4 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'>
					Agregar + 10
				</button>
			</SectionHeader>
		</>
	);
}
