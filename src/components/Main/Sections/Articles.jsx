import { Link } from 'react-router-dom';

import Companies from '../../../assets/solutions/companies.avif';
import Individuals from '../../../assets/solutions/individuals.avif';

export default function Articles() {
	return (
		<div className='bg-primary-50'>
			<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
				{/* Details section */}
				<section aria-labelledby='details-heading'>
					<div className='mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
						<div className='flex flex-col items-center'>
							<div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
								<img
									src={Individuals}
									alt='Drawstring top with elastic loop closure and textured interior padding.'
									className='max-h-96 w-full object-cover object-center'
								/>
							</div>
							<h2
								id='details-heading'
								className='mt-8 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
								Individuals
							</h2>
							<p className='mt-8 text-base text-primary-500'>
								Take your sustainable shopping journey to the next level with our dedicated Green
								Wave app. Seamlessly connect with yoour favourtie e-commerce platforms and discover
								a wide range of eco-friendly products- Track your carbon foot frint, measure your
								plastic waste redusction and contribute to saving our oceans.
							</p>
							<Link
								to='/individuals'
								className='mt-6 w-40 rounded-full bg-primary-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
								Learn More
							</Link>
						</div>
						<div className='flex flex-col items-center'>
							<div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
								<img
									src={Companies}
									alt='Front zipper pouch with included key ring.'
									className='max-h-96 w-full object-cover object-center'
								/>
							</div>
							<h2
								id='details-heading'
								className='mt-8 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
								Companies
							</h2>
							<p className='mt-8 text-base text-primary-500'>
								Request a demo to explire how our platform enables you to embed sustainability into
								your operations, reduce your carbon foorprint, and enhace your corporate
								responsability efforts. New opportunities for your employees to increase their
								awarness of sustainability.
							</p>
							<Link
								to='/companies'
								className='mt-6 w-40 rounded-full bg-primary-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
								Learn More
							</Link>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
