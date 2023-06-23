import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Membership from '../../components/Resources/Membership/Membership';
import Brands from '../../components/Resources/Brands/Brands';

export default function Members() {
	return (
		<>
			<SectionHeader>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>Members</h2>
				<Link
					to='/'
					className='my-6 rounded-md bg-primary-600 px-3.5 py-2.5  text-sm font-semibold leading-8 text-white  shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
					Ride the Wave!
				</Link>
			</SectionHeader>
			<Membership />
			<Brands />
		</>
	);
}
