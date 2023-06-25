import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import img5a from '../../../assets/how-it-works/img-5a.png';
import img5b from '../../../assets/how-it-works/img-5b.png';
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

export default function Step5() {
	return (
		<div className='overflow-hidden bg-white pb-24 pt-16 sm:pb-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2'>
					<div className='lg:pr-8 lg:pt-4'>
						<div className='lg:max-w-lg'>
							{/* <h2 className='text-base font-semibold leading-7 text-indigo-600'>Deploy faster</h2> */}
							<p className='mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
								Drive customers Loyality
							</p>
							<p className='my-6 text-lg leading-8 text-primary-600'>
								Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
								perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
							</p>
							<Link to='' className='text-lg font-semibold text-primary-600'>
								Learn more <span aria-hidden='true'>→</span>
							</Link>
							<img src={img5b} className='my-6 w-full' alt='' srcset='' />
						</div>
					</div>
					{/* <img
						src='https://tailwindui.com/img/component-images/dark-project-app-screenshot.png'
						alt='Product screenshot'
						className='w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-primary-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0'
						width={2432}
						height={1442}
					/> */}
					<svg
						viewBox='0 0 366 729'
						role='img'
						className='mx-auto w-[22.875rem] max-w-full drop-shadow-xl'>
						<title>App screenshot</title>
						<defs>
							<clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
								<rect width={316} height={684} rx={36} />
							</clipPath>
						</defs>
						<path
							fill='#4B5563'
							d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
						/>
						<path
							fill='#343E4E'
							d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
						/>
						<foreignObject
							width={316}
							height={684}
							transform='translate(24 24)'
							clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'>
							<img src={img5a} alt='' />
						</foreignObject>
					</svg>
				</div>
			</div>
		</div>
	);
}
