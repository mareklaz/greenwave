import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Background from '../../assets/individuals/individuals.avif';
import { Link } from 'react-router-dom';
import TrackEffors from '../../components/Individuals/TrackEffors/TrackEffors';
import Testimonials from '../../components/Individuals/Testimonials/Testimonials';

export default function Individuals() {
	return (
		<div>
			<SectionHeader image={Background}>
				<h2 className='mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					Become a Green Waver today!
				</h2>
			</SectionHeader>
			<TrackEffors />
			<Testimonials />
		</div>
	);
}
