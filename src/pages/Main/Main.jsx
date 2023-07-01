import CallToActions from '../../components/Main/CTA/CallToActions';
import Certification from '../../components/Main/Certification/Certification';
import CompaniesLogo from '../../components/Main/CompaniesLogo/CompaniesLogo';
import Hero from '../../components/Main/Hero/Hero';
import OnuLogos from '../../components/Main/OnuLogos/OnuLogos';
import Video from '../../components/Main/Video/Video';
import Kpi from './KPI/Kpi';

export default function Main() {
	return (
		<>
			<Hero />
			<CompaniesLogo />
			<Kpi />
			<Video />
			<OnuLogos />
			<Certification />
			<CallToActions />
		</>
	);
}
