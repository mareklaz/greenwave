import SectionHeader from '../../components/SectionHeader/SectionHeader';
import CleaningGrid from '../../components/Solutions/CleaningGrid/CleaningGrid';
import OffsetingProjects from '../../components/Solutions/OffsetingProjects/OffsetingProjects';
import StoryProjects from '../../components/Solutions/StoryProjects/StoryProjects';

export default function Solutions() {
	return (
		<>
			<SectionHeader>
				<h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>Solutions</h2>
				<p className='mt-6 text-lg leading-8 text-gray-300'>
					Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
					Elit sunt amet fugiat veniam occaecat fugiat aliqua.
				</p>
			</SectionHeader>
			<CleaningGrid />
			<StoryProjects />
			<OffsetingProjects />
		</>
	);
}
