import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import ApiCta from './ApiCta';
import ApiSection from './ApiSection';

export default function Api() {
	return (
		<div>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					Transform your customer journey with sustainability - Embrace the Green Wave now!
				</h2>
				<p className='my-6 text-lg leading-8 text-white'>
					Measure, offset, and take action on carbon emissions with Green Wave's API.
				</p>
			</SectionHeader>
			<div className='py-24'>
				<Section1 />
				<Section2 />
				<Section3 />
				{/* <Section4 /> */}
			</div>
			<ApiSection />
			<ApiCta />
		</div>
	);
}
