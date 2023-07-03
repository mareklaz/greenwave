import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import ApiCta from './ApiCta';
import ApiSection from './ApiSection';
import { Link } from 'react-router-dom';

export default function Api() {
	return (
		<div>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					Transform your customer journey with sustainability
				</h2>
				<p className='my-6 text-lg leading-8 text-white'>
					Measure, offset, and take action on carbon emissions with Green Wave's API. Embrace the
					Green Wave now!
				</p>
				<Link
					to='/contact'
					type='button'
					className='relative hidden items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:inline-flex'>
					Request a Demo
				</Link>
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
