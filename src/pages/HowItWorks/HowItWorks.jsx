import React from 'react';
import Steps from '../../components/HowItWorks/Steps';
import SectionHeader from '../../components/SectionHeader/SectionHeader';

export default function HowItWorks() {
	return (
		<div>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					How it Works
				</h2>
				<p className='my-6 text-lg leading-8 text-white'>
					Learn how Green Wave can help you leverage your sustainability story across your customer
					experience to drive real business results.
				</p>
			</SectionHeader>
			<Steps />
		</div>
	);
}
