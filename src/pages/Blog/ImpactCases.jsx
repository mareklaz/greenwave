import React from 'react';
import ImpactContent2 from '../../components/Impact/ImpactContent2';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export default function ImpactCases() {
	return (
		<div>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					You can save the ocean!
				</h2>
				<p className='my-6 text-lg leading-8 text-gray-300'>
					Learn about the different ways Green Wave's projects work.
				</p>
			</SectionHeader>
			<ImpactContent2 />
		</div>
	);
}
