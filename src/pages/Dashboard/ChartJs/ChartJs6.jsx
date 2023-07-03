import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const ChartJs6 = () => {
	// Datos de ejemplo para los meses
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const totalEmission = [36, 42, 24, 70, 18, 55, 92, 22, 26, 49, 61, 31];

	const data = {
		labels: months,
		datasets: [
			{
				label: 'TOTAL CO2 OFFSET',
				backgroundColor: '#68c193',
				data: calculateOffsetData(totalEmission),
			},
			{
				label: 'TOTAL CO2 FOOTPRINT EMISSIONS',
				backgroundColor: '#186442',
				data: totalEmission,
			},
		],
	};

	function calculateOffsetData(data) {
		return data.map((value) => value * 0.25);
	}

	const options = {
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
	};

	return (
		<div className='mt-6 rounded-lg border border-primary-100 bg-primary-50 px-4 py-5 shadow sm:p-6'>
			<h2 className='text-2xl font-bold text-primary-900'>Emission</h2>

			<div className='mt-6'>
				<Bar data={data} options={options} />
			</div>
		</div>
	);
};

export default ChartJs6;
