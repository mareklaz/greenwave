import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import HowItWorks from '../../components/Companies/HowItWorks';

export default function Companies() {
	return (
		<div>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>Companies</h2>
				<p className='my-6 text-lg leading-8 text-gray-300'>
					Transform your bussines for ocean conservations
				</p>
			</SectionHeader>
			<HowItWorks />
		</div>
	);
}
