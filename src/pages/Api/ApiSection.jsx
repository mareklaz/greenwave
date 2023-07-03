import React from 'react';
import CodeBox from './Code/CodeBox';
import { CodeBracketIcon, CodeBracketSquareIcon } from '@heroicons/react/24/outline';

export default function ApiSection() {
	return (
		<div className='bg-secondary-900'>
			<div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<div className='my-4 flex justify-center'>
						<CodeBracketSquareIcon className='w-12 text-center font-bold tracking-tight text-white' />
					</div>
					<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						Become a PRO of sustainability
					</h2>
					<h3 className='mt-4 text-lg font-bold tracking-tight text-white sm:text-xl'>
						Easy integration with API
					</h3>
					<p className='mt-6 text-lg leading-8 text-white'>
						By providing an API, Green Wave enables seamless communication and data exchange between
						its platform and other B2B applications, such as e-commerce websites.
					</p>

					<CodeBox />
					<p className='text-md text-white'>API Response example</p>
				</div>
			</div>
		</div>
	);
}
