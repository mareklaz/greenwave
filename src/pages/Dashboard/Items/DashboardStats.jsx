import { useContext, useEffect } from 'react';
import icon1 from '../../../assets/dashbard/icon1.png';
import icon2 from '../../../assets/dashbard/icon2.png';
import icon3 from '../../../assets/dashbard/icon3.png';
import icon4 from '../../../assets/dashbard/icon4.png';
import DashboardContext from '../../../context/DashboardContext';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function DashboardStats() {
	const { counter, setCounter } = useContext(DashboardContext);

	const stats = [
		{
			id: 1,
			name: 'Tons of CO2',
			stat: counter,
			icon: icon1,
		},
		{
			id: 2,
			name: 'Plastic Bottles',
			stat: '11,653',
			icon: icon2,
		},
		{
			id: 3,
			name: 'Lts. of Clean Water',
			stat: '46,932',
			icon: icon3,
		},
		{
			id: 4,
			name: 'Envolved Customers',
			stat: '33,235',
			icon: icon4,
		},
	];

	useEffect(() => {
		// Aquí puedes hacer cualquier lógica adicional necesaria
		console.log('Counter = ', counter);
	}, [counter]);

	return (
		<div>
			<h3 className='text-base font-semibold leading-6 text-primary-900'>Stats {counter}</h3>
			<dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 '>
				{stats.map((item) => (
					<div
						key={item.name}
						className='flex justify-between overflow-hidden rounded-lg border border-primary-100 bg-primary-50 px-4 py-5 shadow sm:p-6'>
						<img src={item.icon} className='h-12 w-12' alt='' />
						<div className='text-end'>
							<dt className='truncate text-sm font-medium text-primary-500'>{item.name}</dt>
							<dd className='mt-1 text-3xl font-semibold tracking-tight text-primary-900'>
								{item.stat}
							</dd>
						</div>
					</div>
				))}
			</dl>
		</div>
	);
}
