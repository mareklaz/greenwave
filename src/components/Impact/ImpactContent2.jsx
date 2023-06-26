import { Link } from 'react-router-dom';

const posts = [
	{
		id: 1,
		title: 'Working with the Experts',
		href: '#',
		description:
			'Some of the revenues goes to the experts of the topic. The Ocean Cleanup is one of the most important and biggest non-profit organization in the world.',
		imageUrl:
			'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		category: { title: 'Ocean', href: '#' },
		author: {
			name: 'Michael Foster',
			role: 'Co-Founder / CTO',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		id: 2,
		title: 'Working with the Experts',
		href: '#',
		description:
			'Some of the revenues goes to the experts of the topic. The Ocean Cleanup is one of the most important and biggest non-profit organization in the world.',
		imageUrl:
			'https://images.unsplash.com/photo-1470217407524-b1e77afc6ec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80',
		date: 'Mar 16, 2020',
		datetime: '2020-03-16',
		category: { title: 'Ocean', href: '#' },
		author: {
			name: 'Michael Foster',
			role: 'Co-Founder / CTO',
			href: '#',
			imageUrl:
				'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	// More posts...
];

export default function ImpactContent2() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-2xl lg:max-w-4xl'>
					{/* <h2 className='text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
						From the blog
					</h2>
					<p className='mt-2 text-lg leading-8 text-primary-600'>
						Learn how to grow your business with our expert advice.
					</p> */}
					<div className='mt-16 space-y-20 lg:mt-20 lg:space-y-20'>
						{posts.map((post) => (
							<article key={post.id} className='relative isolate flex flex-col gap-8 lg:flex-row'>
								<div className='relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0'>
									<img
										src={post.imageUrl}
										alt=''
										className='absolute inset-0 h-full w-full rounded-2xl bg-primary-50 object-cover'
									/>
									<div className='absolute inset-0 rounded-2xl ring-1 ring-inset ring-primary-900/10' />
								</div>
								<div>
									<div className='flex items-center gap-x-4 text-xs'>
										<a
											href={post.category.href}
											className='relative z-10 rounded-full bg-primary-50 px-3 py-1.5 font-medium text-primary-600 hover:bg-primary-100'>
											{post.category.title}
										</a>
									</div>
									<div className='group relative max-w-xl'>
										<h3 className='mt-3 text-lg font-semibold leading-6 text-primary-900 group-hover:text-primary-600'>
											<span href={post.href}>
												<span className='absolute inset-0' />
												{post.title}
											</span>
										</h3>
										<p className='my-4 text-sm leading-6 text-primary-600'>{post.description}</p>
									</div>
									<Link
										to='/impact/cases/the-ocean-cleanup'
										className='text-sm font-semibold text-primary-500 hover:text-primary-900'>
										Learn more <span aria-hidden='true'>→</span>
									</Link>
									{/* <div className='mt-6 flex border-t border-primary-900/5 pt-6'>
										<div className='relative flex items-center gap-x-4'>
											<img
												src={post.author.imageUrl}
												alt=''
												className='h-10 w-10 rounded-full bg-primary-50'
											/>
											<div className='text-sm leading-6'>
												<p className='font-semibold text-primary-900'>
													<a href={post.author.href}>
														<span className='absolute inset-0' />
														{post.author.name}
													</a>
												</p>
												<p className='text-primary-600'>{post.author.role}</p>
											</div>
										</div>
									</div> */}
								</div>
							</article>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
