import React from 'react';
import Step1 from './Step/Step1';
import Step2 from './Step/Step2';
import Step3 from './Step/Step3';
import Step4 from './Step/Step4';

export default function HowItWorks() {
	return (
		<>
			<div className='bg-white pt-12 sm:pt-32'>
				<div className='mx-auto max-w-7xl px-6 lg:px-8'>
					<div className='mx-auto max-w-2xl lg:mx-0'>
						<h2 className='text-4xl font-bold tracking-tight text-primary-900 sm:text-6xl'>
							How It Works
						</h2>
					</div>
				</div>
			</div>
			<Step1 />
			<Step2 />
			<Step3 />
			<Step4 />
		</>
	);
}
