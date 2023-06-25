import CallToActions from '../../components/Main/CTA/CallToActions';
import CompaniesLogo from '../../components/Main/CompaniesLogo/CompaniesLogo';
import Hero from '../../components/Main/Hero/Hero';
import OnuLogos from '../../components/Main/OnuLogos/OnuLogos';
import Video from '../../components/Main/Video/Video';

export default function Main() {
	return (
		<>
			<Hero />
			<CompaniesLogo />
			<Video />
			<OnuLogos />
			<CallToActions />
		</>
	);
}
