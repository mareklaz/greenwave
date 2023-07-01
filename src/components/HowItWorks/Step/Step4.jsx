import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import img4a from '../../../assets/how-it-works/img-4a.png';
import { Link } from 'react-router-dom';

const features = [
	{
		name: 'Push to deploy.',
		description:
			'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
		icon: CloudArrowUpIcon,
	},
	{
		name: 'SSL certificates.',
		description:
			'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
		icon: LockClosedIcon,
	},
	{
		name: 'Database backups.',
		description:
			'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
		icon: ServerIcon,
	},
];

export default function Step4() {
	return (
		<div className='overflow-hidden bg-white py-16 sm:py-16'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className='lg:ml-auto lg:pl-4 lg:pt-4'>
						<div className='lg:max-w-lg'>
							{/* <h2 className='text-base font-semibold leading-7 text-indigo-600'>Deploy faster</h2> */}
							<p className='mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
								Monitor Progress
							</p>
							<p className='my-6 text-lg leading-8 text-primary-600'>
								Through our analytics dashboard, you can effortlessly monitor your progress in
								reducing environmental impact. These valuable insights enable you to make
								data-driven decisions, optimize your sustainability strategies.
							</p>
							<Link to='/dashboard' className='text-lg font-semibold text-primary-600'>
								Learn more <span aria-hidden='true'>→</span>
							</Link>
						</div>
					</div>
					<div className='flex items-start justify-end lg:order-first'>
						{/* <img
							src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
							alt='Product screenshot'
							className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-primary-400/10 sm:w-[57rem]'
							width={2432}
							height={1442}
						/> */}
						<img src={img4a} className='my-4 w-full' alt='' srcset='' />
					</div>
				</div>
			</div>
		</div>
	);
}
