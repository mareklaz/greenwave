import { Link } from 'react-router-dom';

export default function ResourcesCta() {
	return (
		<div className='bg-secondary-700'>
			<div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
				<div className='mx-auto max-w-2xl text-center'>
					<h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
						Dive into Sustainability: Empowering Oceans with Green Wave.
					</h2>

					<div className='mt-10 flex items-center justify-center gap-x-6'>
						<Link
							to='/contact'
							type='button'
							className='relative hidden items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:inline-flex'>
							Request a Demo
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
