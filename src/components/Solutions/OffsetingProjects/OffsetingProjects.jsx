const products = [
	{
		id: 1,
		title: 'Legitimacy',
		subtitle: 'Gain credibiity and trust',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti iure ex labore quia autem voluptate, a cupiditate aliquam voluptatibus?',
		imageSrc:
			'https://images.unsplash.com/photo-1671106956521-bf63702c82b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		imageAlt: 'Gain credibiity and trust',
	},
	{
		id: 2,
		title: 'Impact',
		subtitle: 'Participate in projects',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti iure ex labore quia autem voluptate, a cupiditate aliquam voluptatibus?',
		imageSrc:
			'https://images.unsplash.com/photo-1590682680695-43b964a3ae17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
		imageAlt: 'Participate in projects',
	},
	{
		id: 3,
		title: 'Tracability',
		subtitle: 'Monitor and meassure',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti iure ex labore quia autem voluptate, a cupiditate aliquam voluptatibus?',
		imageSrc:
			'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		imageAlt: 'Monitor and meassure',
	},
	{
		id: 4,
		title: 'Transparency',
		subtitle: 'Accountability',
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corrupti iure ex labore quia autem voluptate, a cupiditate aliquam voluptatibus?',
		imageSrc:
			'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
		imageAlt: 'Accountability',
	},
];

export default function OffsetingProjects() {
	return (
		<div className='bg-primary-50'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<div className='mb-8'>
					<p className='mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
						Offseting projects for every bussiness
					</p>
					<p className='mt-4 text-lg leading-8 text-primary-600'>
						Join the wave, stop ocean polution and shape a better future.
					</p>
					<p className='mt-4 text-lg leading-8 text-primary-600'>
						International cetified for sustainable solutions:{' '}
						<span className='font-semibold'>Green Wave</span> ensures envoirmental integrity of
						offsetting projects.
					</p>
				</div>

				<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.map((product) => (
						<a key={product.id} href={product.href} className='group'>
							<div className='aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-primary-200 xl:aspect-h-8 xl:aspect-w-7'>
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className='h-full w-full object-cover object-center group-hover:opacity-75'
								/>
							</div>
							<h3 className='mt-4 text-lg font-medium text-primary-700'>{product.title}</h3>
							<p className='text-md mt-1 font-normal text-primary-900'>{product.description}</p>
						</a>
					))}
				</div>
			</div>
		</div>
	);
}
