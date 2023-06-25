import React, { useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';

import Icon1 from '../../../../assets/icon1.png';
import Icon2 from '../../../../assets/icon2.png';
import Icon3 from '../../../../assets/icon3.png';

function formatNumber(number) {
	return new Intl.NumberFormat('de-DE').format(number);
}

export default function Stats() {
	const [materialNumber, setMaterialNumber] = useState(5601);

	// ENCENDIDO
	const encendido = false;

	useEffect(() => {
		if (encendido) {
			const intervalId = setInterval(() => {
				const randomNumber = Math.floor(Math.random() * 100) + 1;
				setMaterialNumber((prevNumber) => prevNumber + randomNumber);
			}, 3000);

			return () => {
				clearInterval(intervalId);
			};
		}
	}, []);

	const animatedNumber = useSpring({
		number: materialNumber,
		from: { number: 0 },
		config: { duration: 1000 },
	});

	const formattedNumber = formatNumber(Math.round(animatedNumber.number));

	const stats = [
		{
			id: 1,
			name: 'TONS OF PLASICS TAKEN OUT OF THE OCEAN',
			value: `${formattedNumber} kg`,
			icon: Icon1,
		},
		{ id: 2, name: 'TONS OF PLASICS RETRIVED AT PORT', value: 38.494, icon: Icon2 },
		{ id: 3, name: 'COMPANIES CLEANING THE OCEANS', value: 34, icon: Icon3 },
	];

	return (
		<div className=''>
			<div className='mx-auto max-w-7xl'>
				{/* <dl className='grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3'>
					{stats.map((stat) => (
						<div key={stat.id} className='mx-auto flex max-w-xs flex-col items-center gap-y-4'>
							<img className='order-first w-16' src={stat.icon} alt='' />
							<dt className='order-last text-sm font-semibold leading-6 text-gray-300'>
								{stat.name}
							</dt>
							<animated.dd className='text-6xl font-bold tracking-tight text-white'>
								{stat.id === 1
									? animatedNumber.number.interpolate((value) => formatNumber(value.toFixed(0)))
									: stat.value}
							</animated.dd>
						</div>
					))}
				</dl> */}
				<dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
					{stats.map((stat) => (
						<div key={stat.id} className='flex flex-col gap-y-3 border-l border-white/10 pl-6'>
							<img className='order-first w-14' src={stat.icon} alt='' />
							<dt className='text-sm leading-6'>{stat.name}</dt>
							<animated.dd className='order-first text-3xl font-semibold tracking-tight'>
								{stat.id === 1
									? animatedNumber.number.interpolate((value) => formatNumber(value.toFixed(0)))
									: stat.value}
							</animated.dd>
						</div>
					))}
				</dl>
			</div>
		</div>
	);
}
