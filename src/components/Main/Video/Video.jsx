import React from 'react';
import GreenwaveVideo from '../../../assets/greenwave-video.mp4';

export default function Video() {
	return (
		<div className='bg-primary-900'>
			<div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
				<div className='mx-auto max-w-4xl text-center'>
					<h2 className='mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						Shop smarter with Green Wave. Here our proposal to make a true impact
					</h2>

					<video className='w-full rounded-lg ring-2 ring-primary-500 ring-offset-2' controls>
						<source src={GreenwaveVideo} type='video/mp4' />
						Tu navegador no admite el elemento de video.
					</video>
				</div>
			</div>
		</div>
	);
}
