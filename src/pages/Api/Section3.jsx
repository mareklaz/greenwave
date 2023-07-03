import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import element3 from '../../assets/api/element3.png';
export default function Section3() {
	return (
		<div className='overflow-hidden bg-white pb-16 pt-24 sm:pt-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className='lg:pr-8 lg:pt-4'>
						<div className='lg:max-w-lg'>
							{/* <h2 className='text-base font-semibold leading-7 text-indigo-600'>Deploy faster</h2> */}
							<p className='mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
								Enhance Customer Journeys:
							</p>
							<p className='mt-6 text-lg leading-8 text-primary-600'>
								Deliver seamless and engaging experiences to your customers, integrating
								sustainability into every touchpoint of their interactions with your brand.
							</p>
						</div>
					</div>
					<img src={element3} alt='' />
				</div>
			</div>
		</div>
	);
}
