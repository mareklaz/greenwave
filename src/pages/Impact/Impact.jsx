import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import ImpactBackground from '../../assets/impact-background.avif';

import ImpactContent1 from '../../components/Impact/ImpactContent1';
import OffsetingProjects from '../../components/Solutions/OffsetingProjects/OffsetingProjects';
import OnuLogos from '../../components/Main/OnuLogos/OnuLogos';
import logo1 from '../../assets/logos/acr_logo.png';
import logo2 from '../../assets/logos/esr_logo.png';
import logo3 from '../../assets/logos/oceanplastic_logo.webp';
import Certification from '../../components/Main/Certification/Certification';
import ImpactCTA from './ImpactCTA';

export default function Impact() {
	return (
		<>
			<SectionHeader image={ImpactBackground}>
				<h2 className='text-4xl font-bold tracking-tight text-secondary-950 sm:text-6xl'>
					You can save the Ocean!
				</h2>
				<p className='my-6 text-lg leading-8 text-secondary-950'>
					Offset your order's environmental impact at checkout and make waves for a more sustainable
					future
				</p>
				<div className='flex flex-row justify-around'>
					<img src={logo1} alt='' className='h-32' />
					<img src={logo2} alt='' className='h-32' />
					<img src={logo3} alt='' className='h-32' />
				</div>
				<p className='text-md my-2  text-secondary-950'>Our certifications</p>
			</SectionHeader>
			<OffsetingProjects />
			<OnuLogos />
			<Certification />
			<ImpactContent1 />
			<ImpactCTA />
		</>
	);
}
