import {
	ArrowPathIcon,
	ArrowRightCircleIcon,
	CloudArrowUpIcon,
	FingerPrintIcon,
	LockClosedIcon,
} from '@heroicons/react/24/outline';

const features = [
	{
		name: 'Push to deploy',
		description:
			'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates',
		description:
			'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
		icon: LockClosedIcon,
	},
	{
		name: 'Simple queues',
		description:
			'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
		icon: ArrowPathIcon,
	},
	{
		name: 'Advanced security',
		description:
			'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
		icon: FingerPrintIcon,
	},
];

const benefits = [
	{
		id: 1,
		description:
			'Community Engagement: Clean Wave brings together individuals, schools, local organizations, and businesses to raise awareness about ocean pollution.',
		icon: ArrowRightCircleIcon,
	},
	{
		id: 2,
		description: 'Environmental impact reduction.',
		icon: ArrowRightCircleIcon,
	},
	{
		id: 3,
		description: 'Endless collaboration with brands and e-commerce platforms.',
		icon: ArrowRightCircleIcon,
	},
	{
		id: 4,
		description: 'Experienced ocean management of pollution and being part of the movement.',
		icon: ArrowRightCircleIcon,
	},
	{
		id: 5,
		description: 'Every purchase and contribution is rewarded.',
		icon: ArrowRightCircleIcon,
	},
];

export default function Benefits() {
	return (
		<div className='bg-primary-900 py-16 sm:py-16'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:text-center'>
					<h2 className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						Benefits
					</h2>
				</div>
				<div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl'>
					<dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
						{benefits.map((feature) => (
							<div key={feature.id} className='relative pl-16'>
								<dt className='text-base font-semibold leading-7 text-white'>
									<div className='absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary-400'>
										<feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
									</div>
									{feature.description}
								</dt>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
