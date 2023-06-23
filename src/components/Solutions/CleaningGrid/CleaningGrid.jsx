import { ArrowRightCircleIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

const products = [
	{
		id: 1,
		name: 'Atlantic Ocean',
		description: 'Cleaning the oceans of Plastic Waste',
		imageSrc:
			'https://images.unsplash.com/photo-1621451537084-482c73073a0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
		imageAlt: 'Cleaning the oceans of Plastic Waste',
	},
	{
		id: 2,
		name: 'Microplastics',
		description: 'Cleaning the oceans of microplastics',
		imageSrc:
			'https://images.unsplash.com/photo-1621664293078-97e3b80711f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
		imageAlt: 'Cleaning the oceans of microplastics',
	},
	{
		id: 3,
		name: 'Coral Restauration',
		description: 'Coral restauration all over the world',
		imageSrc:
			'https://images.unsplash.com/photo-1546026423-cc4642628d2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
		imageAlt: 'Coral restauration all over the world',
	},
	{
		id: 4,
		name: 'Clean Sand',
		description: 'Clear the beaches all over the world',
		imageSrc:
			'https://images.unsplash.com/photo-1559751141-56b2c79ca2fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80',
		imageAlt: 'Clear the beaches all over the world',
	},
];

export default function CleaningGrid() {
	return (
		<div className='bg-primary-50'>
			<div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
				<h2 className='sr-only'>Cleaning</h2>

				<div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{products.map((product) => (
						<div key={product.id} href={product.href} className='group'>
							<div className='aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg bg-primary-200'>
								<img
									src={product.imageSrc}
									alt={product.imageAlt}
									className='h-52 w-full object-cover object-center group-hover:opacity-75'
								/>
							</div>
							<h3 className='mt-4 text-lg font-medium text-primary-700'>{product.name}</h3>
							<p className='text-md mt-1 font-normal text-primary-900'>{product.description}</p>
							<Link className='text-md mt-4 inline-flex items-center gap-x-2 py-2 font-semibold text-primary-500 hover:text-primary-300 '>
								Learn More
								<ArrowRightCircleIcon className='-mr-0.5 h-5 w-5' aria-hidden='true' />
							</Link>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
