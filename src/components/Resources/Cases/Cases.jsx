import CaseImg1 from '../../../assets/resources/case1.jpg';
import CaseImg2 from '../../../assets/resources/case2.jpg';
import CaseImg3 from '../../../assets/resources/case3.jpg';
import CaseImg4 from '../../../assets/resources/case4.jpg';
import CaseImg5 from '../../../assets/resources/case5.jpg';
import CaseImg6 from '../../../assets/resources/case6.jpg';
import CaseImg7 from '../../../assets/resources/case7.jpg';
import CaseImg8 from '../../../assets/resources/case8.jpg';

const posts = [
	{
		id: 1,
		title: 'Oceanic Harmony',
		to: '/',
		description: "How Green Wave's carbon offset projects help restore marine ecosystems",
		imageUrl: CaseImg1,
	},
	{
		id: 2,
		title: 'Sustainable Shipping Solutions',
		to: '/',
		description: 'Green Wave partners with eco-friendly logistics providers',
		imageUrl: CaseImg2,
	},
	{
		id: 3,
		title: 'Plastic-Free Paradise',
		to: '/',
		description: "Green Wave's collaboration with brands in eliminating single-use plastics",
		imageUrl: CaseImg3,
	},
	{
		id: 4,
		title: 'Empowering Communities',
		to: '/',
		description: "Green Wave's impact on local economies through ocean conservation",
		imageUrl: CaseImg4,
	},
	{
		id: 5,
		title: 'Revolutionizing Retail',
		to: '/',
		description: 'How Green Wave transforms traditional shopping into sustainable experiences',
		imageUrl: CaseImg5,
	},
	{
		id: 6,
		title: 'From Waste to Wealth',
		to: '/',
		description: "Green Wave's initiatives in upcycling and recycling programs",
		imageUrl: CaseImg6,
	},
	{
		id: 7,
		title: 'Preserving Biodiversity',
		to: '/',
		description: "Green Wave's efforts in protecting endangered species and habitats",
		imageUrl: CaseImg7,
	},
	{
		id: 8,
		title: 'Education for Sustainability',
		to: '/',
		description: "Green Wave's impact on raising awareness and environmental consciousness",
		imageUrl: CaseImg8,
	},
];

export default function Cases() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					{posts.map((post) => (
						<article
							key={post.id}
							className='relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-primary-900 px-8 pb-8 pt-80 sm:pt-48 lg:pt-80'>
							<img
								src={post.imageUrl}
								alt=''
								className='absolute inset-0 -z-10 h-full w-full object-cover'
							/>
							<div className='absolute inset-0 -z-10 bg-gradient-to-t from-primary-900 via-primary-900/40' />
							<div className='absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-primary-900/10' />

							<div className='flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-secondary-300'>
								<p className='rounded-full bg-secondary-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600'>
									Case Studies
								</p>
							</div>
							<h3 className='mt-3 text-lg font-semibold leading-6 text-white'>
								<p>
									<span className='absolute inset-0' />
									{post.title}
								</p>
							</h3>
							<h3 className='text-md mt-3 font-normal leading-6 text-white'>
								<p>{post.description}</p>
							</h3>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
