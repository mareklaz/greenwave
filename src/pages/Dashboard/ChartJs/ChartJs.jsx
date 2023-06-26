import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const DoughnutChart = ({ data }) => {
	const chartRef = useRef(null);

	useEffect(() => {
		const ctx = chartRef.current.getContext('2d');

		new Chart(ctx, {
			type: 'doughnut',
			data: {
				labels: ['Man', 'Woman'],
				datasets: [
					{
						data: data,
						backgroundColor: ['#639ba2', '#68c193'], // Colores personalizables para cada dato
					},
				],
			},
		});
	}, [data]);

	return <canvas ref={chartRef} />;
};

export default function ChartJs() {
	const chartData = [45, 55];
	return (
		<div className='rounded-lg border border-primary-100 bg-primary-50 px-4 py-5 shadow sm:p-6'>
			<h2>Gender</h2>

			<div className=''>
				<DoughnutChart data={chartData} />
			</div>
		</div>
	);
}
