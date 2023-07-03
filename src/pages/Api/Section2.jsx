import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import element2 from '../../assets/api/element2.png';
export default function Section2() {
	return (
		<div className='overflow-hidden bg-white py-16 sm:py-16'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className='lg:ml-auto lg:pl-4 lg:pt-4'>
						<div className='lg:max-w-lg'>
							{/* <h2 className='text-base font-semibold leading-7 text-indigo-600'>Deploy faster</h2> */}
							<p className='mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
								Support sustainable initiatives:
							</p>
							<p className='my-6 text-lg leading-8 text-primary-600'>
								Fund a range of impactful offsetting projects that tackle climate change, protect
								ecosystems, and promote social welfare.
							</p>
						</div>
					</div>
					<div className='flex items-start justify-end lg:order-first'>
						<img src={element2} alt='' />
					</div>
				</div>
			</div>
		</div>
	);
}
