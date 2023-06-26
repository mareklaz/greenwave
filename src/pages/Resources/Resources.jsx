import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Cases from '../../components/Resources/Cases/Cases';

export default function Resources() {
	return (
		<>
			<SectionHeader>
				<h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Resources</h2>
				<p className='my-6 text-lg leading-8 text-gray-300'>
					Through our global network of reputable suppliers, we actively contribute to environmental
					conservation and sustainability. Join us on the Green Wave journey and become part of our
					mission to create a more sustainable future for our planet. Together, let's make a lasting
					positive impact.
				</p>
				<Link
					to='/contact'
					type='button'
					className='relative hidden items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:inline-flex'>
					Request a Demo
				</Link>
			</SectionHeader>
			<Cases />
		</>
	);
}
