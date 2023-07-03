import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext('2d');

		new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: [
					'Components Materials',
					'Packaging Materials',
					'Shipping Materials',
					'Manufacturing',
				],
				datasets: [
					{
						data: data,
						backgroundColor: ['#639ba2', '#68c193', '#186442', '#1d2a2f'], // Colores personalizables para cada dato
					},
				],
			},
		});
	}, [data]);

	return <canvas ref={chartRef} />;
};

export default function ChartJs2() {
	const chartData = [16, 44, 15, 15];
	return (
		<div className='rounded-lg border border-primary-100 bg-primary-50 px-4 py-5 shadow sm:p-6'>
			<h2 className='text-2xl font-bold text-primary-900'>Product Lifecylce</h2>
			<div className=''>
				<DoughnutChart data={chartData} />
			</div>
		</div>
	);
}
