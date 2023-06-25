import { Link } from 'react-router-dom';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CleaningGrid from '../../components/Solutions/CleaningGrid/CleaningGrid';
import OffsetingProjects from '../../components/Solutions/OffsetingProjects/OffsetingProjects';
import StoryProjects from '../../components/Solutions/StoryProjects/StoryProjects';
import HeaderImage from '../../assets/solutions/header.avif';

export default function Solutions() {
	return (
		<div>
			<SectionHeader image={HeaderImage}>
				<h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Solutions</h2>
				<p className='my-6 text-lg leading-8 text-white '>
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
					Elit sunt amet fugiat veniam occaecat fugiat aliqua.
				</p>
				<Link
					to='/'
					className='rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-primary-50  shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
					Request a Demo
				</Link>
			</SectionHeader>
			<CleaningGrid />
			<StoryProjects />
			<OffsetingProjects />
		</div>
	);
}
