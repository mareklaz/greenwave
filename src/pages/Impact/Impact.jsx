import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ImpactBackground from '../../assets/impact.avif';
import ImpactContent1 from '../../components/Impact/ImpactContent1';
import OffsetingProjects from '../../components/Solutions/OffsetingProjects/OffsetingProjects';
import OnuLogos from '../../components/Main/OnuLogos/OnuLogos';

export default function Impact() {
	return (
		<>
			<SectionHeader image={ImpactBackground}>
				<h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					You can save the Ocean!
				</h2>
				<p className='my-6 text-lg leading-8 text-white'>
					Offset your order's environmental impact at checkout and make waves for a more sustainable
					future
				</p>
			</SectionHeader>
			<OffsetingProjects />
			<OnuLogos />
			<ImpactContent1 />
		</>
	);
}
