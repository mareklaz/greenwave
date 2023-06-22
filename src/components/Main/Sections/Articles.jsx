import { Link } from 'react-router-dom';

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
									src='https://images.unsplash.com/photo-1616449973117-0e1d99c56ed3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80'
									alt='Drawstring top with elastic loop closure and textured interior padding.'
									className='h-full w-full object-cover object-center'
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
								to='/'
								className='mt-6 w-40 rounded-full bg-primary-600 px-4 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
								Learn More
							</Link>
						</div>
						<div className='flex flex-col items-center'>
							<div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
								<img
									src='https://images.unsplash.com/photo-1606185540834-d6e7483ee1a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
									alt='Front zipper pouch with included key ring.'
									className='h-full w-full object-cover object-center'
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
								to='/'
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
