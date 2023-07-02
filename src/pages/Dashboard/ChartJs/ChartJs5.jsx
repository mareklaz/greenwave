import React from 'react';
import { Bar, Line } from 'react-chartjs-2';

const ChartJs5 = () => {
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

	// Datos de ejemplo para la gráfica dZe barras
	const datosBarras = [500, 200, 150, 250, 300, 350, 200, 150, 250, 300, 350, 200];

	// Datos de ejemplo para la gráfica de líneas
	const datosLineas = [50, 25, 32, 16, 21, 55, 42, 26, 18, 52, 52, 32];

	// Configuración del gráfico
	const data = {
		labels: months,
		datasets: [
			{
				type: 'line',
				label: 'TOTAL IMPRESIONES',
				data: datosLineas,
				fill: false,

				borderColor: '#446d76',
				backgroundColor: '#446d76',
				borderWidth: 4,
				yAxisID: 'lineas',
			},
			{
				type: 'bar',
				label: 'TOTAL CO2 FOOTPRINT EMISSION',
				data: datosBarras,
				backgroundColor: '#68c193',

				borderWidth: 1,
			},
		],
	};

	// Configuración de ejes
	const options = {
		scales: {
			y: {
				suggestedMax: Math.max(...datosBarras) + 10,
				beginAtZero: true,
			},
			lineas: {
				suggestedMax: Math.max(...datosBarras) + 10,
				display: false,
				position: 'right',
				beginAtZero: true,
			},
		},
	};

	return (
		<div className='mt-6 rounded-lg border border-primary-100 bg-primary-50 px-4 py-5 shadow sm:p-6'>
			<h2>Total Emission</h2>

			<div className='mt-6'>
				<Bar data={data} options={options} />
			</div>
		</div>
	);
};

export default ChartJs5;
