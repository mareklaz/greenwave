import React from 'react';
import ImpactContent3 from '../../components/Impact/ImpactContent3';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Benefits from '../../components/Impact/Benefits/Benefits';
import OnuLogos from '../../components/Main/OnuLogos/OnuLogos';

export default function OceanCleanUp() {
	return (
		<div>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					The Ocean Cleanup
				</h2>
				<p className='my-6 text-lg leading-8 text-gray-300'>Working with exprests</p>
			</SectionHeader>
			<ImpactContent3 />
			<Benefits />
			<OnuLogos />
		</div>
	);
}
