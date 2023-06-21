export default function Articles() {
	return (
		<div className='bg-primary-50'>
			<div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
				{/* Details section */}
				<section aria-labelledby='details-heading'>
					<div className='mt-16 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
						<div>
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
								The 20L model has enough space for 370 candy bars, 6 cylinders of chips, 1220
								standard gumballs, or any combination of on-the-go treats that your heart desires.
								Yes, we did the math.
							</p>
						</div>
						<div>
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
								Up your snack organization game with multiple compartment options. The quick-access
								stash pouch is ready for even the most unexpected snack attacks and sharing needs.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
