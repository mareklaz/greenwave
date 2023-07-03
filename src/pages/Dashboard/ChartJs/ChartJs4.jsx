import React from 'react';
import { Bar } from 'react-chartjs-2';

const ChartJs4 = () => {
	// Datos de ejemplo para los meses y sus valores
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

	const values = [5, 8, 12, 6, 10, 14, 7, 9, 11, 13, 8, 10];

	// Configuración de la gráfica
	const chartData = {
		labels: months,
		datasets: [
			{
				backgroundColor: '#68c193', // Color de las barras
				data: values.map((value) => ({
					x: 0, // Valor de inicio de la barra
					y: value, // Valor final de la barra
				})),
			},
		],
	};

	const chartOptions = {
		scales: {
			x: {
				beginAtZero: true,
			},
			y: {
				grid: {
					display: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			title: {
				display: false,
				text: 'Simple title',
			},
		},
	};

	return (
		<div className='mt-6 rounded-lg border border-primary-100 bg-primary-50 px-4 py-5 shadow sm:p-6'>
			<h2 className='text-2xl font-bold text-primary-900'>Information</h2>

			<div className='mt-6'>
				<Bar data={chartData} options={chartOptions} />
			</div>
		</div>
	);
};

export default ChartJs4;
