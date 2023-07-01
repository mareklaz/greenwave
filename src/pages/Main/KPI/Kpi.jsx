export default function Kpi() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:mx-0'>
					<h2 className='text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
						The Green Wave Advantage
					</h2>
					{/* <p className='mt-6 text-base leading-7 text-primary-600'>
						Diam nunc lacus lacus aliquam turpis enim. Eget hac velit est euismod lacus. Est non
						placerat nam arcu. Cras purus nibh cursus sit eu in id. Integer vel nibh.
					</p> */}
				</div>
				<div className='mx-auto mt-16 flex max-w-2xl flex-col gap-8 lg:mx-0 lg:mt-20 lg:max-w-none lg:flex-row lg:items-end'>
					<div className='flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-primary-100 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start'>
						<p className='flex-none text-3xl font-bold tracking-tight text-primary-900'>250k</p>
						<div className='sm:w-80 sm:shrink lg:w-auto lg:flex-none'>
							<p className='text-lg font-semibold tracking-tight text-primary-900'>
								Average Order Value
							</p>
							<p className='mt-2 text-base leading-7 text-primary-600'>
								Give customers a reason to deepen their support for your brand.
							</p>
						</div>
					</div>
					<div className='flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44'>
						<p className='flex-none text-3xl font-bold tracking-tight text-white'>$8.9 billion</p>
						<div className='sm:w-80 sm:shrink lg:w-auto lg:flex-none'>
							<p className='text-lg font-semibold tracking-tight text-white'>Repurchase Rate</p>
							<p className='mt-2 text-base leading-7 text-white'>
								Build lasting relationships that make customers keep coming back.
							</p>
						</div>
					</div>
					<div className='flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-secondary-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28'>
						<p className='flex-none text-3xl font-bold tracking-tight text-white'>401,093</p>
						<div className='sm:w-80 sm:shrink lg:w-auto lg:flex-none'>
							<p className='text-lg font-semibold tracking-tight text-white'>Cart Conversion</p>
							<p className='mt-2 text-base leading-7 text-white'>
								When shoppers can help save the planet, they won’t second guess.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
