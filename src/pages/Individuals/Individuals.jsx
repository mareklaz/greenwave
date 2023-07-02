import React from 'react';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import Background from '../../assets/individuals/individuals.avif';
import { Link } from 'react-router-dom';
import TrackEffors from '../../components/Individuals/TrackEffors/TrackEffors';
import Testimonials from '../../components/Individuals/Testimonials/Testimonials';

export default function Individuals() {
	return (
		<div>
			<TrackEffors />
			<Testimonials />
		</div>
	);
}
