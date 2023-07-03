import React from 'react';
import DashboardStats from './Items/DashboardStats';
import ChartJs from './ChartJs/ChartJs';
import ChartJs1 from './ChartJs/ChartJs1';
import ChartJs2 from './ChartJs/ChartJs2';
import ChartJs4 from './ChartJs/ChartJs4';
import ChartJs5 from './ChartJs/ChartJs5';
import ChartJs6 from './ChartJs/ChartJs6';

export default function DashboardContent() {
	return (
		<div>
			<DashboardStats />
			<div className='mt-5'>
				<h3 className='text-base font-semibold leading-6 text-primary-900'>Data</h3>
				<ChartJs5 />
				<ChartJs6 />
				<dl className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 '>
					<ChartJs />
					<ChartJs1 />
					<ChartJs2 />
				</dl>
				<ChartJs4 />
			</div>
		</div>
	);
}
