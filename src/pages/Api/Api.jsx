import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import ApiCta from './ApiCta';

export default function Api() {
	return (
		<div>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					Build transparent, sustainable shopping experiences across your customer journey.
				</h2>
				<p className='my-6 text-lg leading-8 text-white'>
					Leverage Ecocart’s API to calculate the carbon emissions associated with manufacturing and
					shipping processes and encourage shoppers to join you in taking climate action.
				</p>
			</SectionHeader>
			<Section1 />
			<Section2 />
			<Section3 />
			<ApiCta />
		</div>
	);
}
