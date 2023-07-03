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

	// Datos de ejemplo para la gráfica de barras
	const datosBarras = [18432, 24320, 28743, 23234, 38830, 40000, 42500, 0, 0, 0, 0, 0];

	// Datos de ejemplo para la gráfica de líneas
	// const datosLineas = [200, 25, 32, 16, 21, 55, 42, 26, 18, 52, 52, 32];

	function calculateLine(data) {
		return data.map((value) => value * 0.2);
	}

	let suma = 0;

	const value = calculateLine(datosBarras);

	function calculateTotal(data) {
		data.forEach((element) => {
			suma = suma + element;
		});
		return suma;
	}

	// Configuración del gráfico
	const data = {
		labels: months,
		datasets: [
			{
				type: 'line',
				label: 'CONVERTION RATE:',
				data: calculateLine(datosBarras),
				fill: false,

				borderColor: '#446d76',
				backgroundColor: '#446d76',
				borderWidth: 4,
				yAxisID: 'lineas',
			},
			{
				type: 'bar',
				label: 'TOTAL TRANSACTION',
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
			<div className='flex justify-between'>
				<h2 className='text-2xl font-bold text-primary-900'>Convertion Rate</h2>

				<div className='flex flex-col text-end'>
					<p className='text-xl text-secondary-400'>
						Adaption rate: <span className='font-bold'>15,8%</span>
					</p>
					{/* <p className='text-xl text-secondary-400'>
						Total transaction:{' '}
						<span className='font-bold'>{Math.round(calculateTotal(value))}</span>
					</p> */}
					<p className='text-xl text-secondary-400'>
						Total transaction:{' '}
						<span className='font-bold'>
							{new Intl.NumberFormat('en-En').format(Math.round(calculateTotal(datosBarras) / 2))}
						</span>
					</p>
				</div>
			</div>
			<div className='mt-6'>
				<Bar data={data} options={options} />
			</div>
		</div>
	);
};

export default ChartJs5;
