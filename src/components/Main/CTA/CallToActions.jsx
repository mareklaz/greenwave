import { Link } from 'react-router-dom';

export default function CallToActions() {
	return (
		<div className='bg-primary-900'>
			<div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-primary-50 sm:text-4xl'>
						Drive into sustainability:
						<br />
						Empowering oceans with Freen Wave
					</h2>

					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<Link
							to='/'
							className='rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-primary-50  shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
							Request a Demo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
