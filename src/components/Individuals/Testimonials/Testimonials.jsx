const testimonials = [
	{
		body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
		author: {
			name: 'Sarah Mayer',
			handle: 'Switzerland',
			imageUrl:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: `I love how the Green Wave app gamifies sustainability. It motivates me to make eco-conscious choices and earn badges along the way. It's like a friendly competition that keeps me engaged.`,
		author: {
			name: 'Sarah Mayer',
			handle: 'Switzerland',
			imageUrl:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
	{
		body: `I love how the Green Wave app gamifies sustainability. It motivates me to make eco-conscious choices and earn badges along the way. It's like a friendly competition that keeps me engaged.`,
		author: {
			name: 'Sarah Mayer',
			handle: 'Switzerland',
			imageUrl:
				'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
		},
	},
];

export default function Testimonials() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='mx-auto max-w-xl text-center'>
					<h2 className='text-lg font-semibold leading-8 tracking-tight text-primary-600'>
						Testimonials
					</h2>
					<p className='mt-2 text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
						What our members are saying
					</p>
				</div>
				<div className='mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none'>
					<div className='-mt-8  sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3'>
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.author.handle}
								className='pt-8 sm:inline-block sm:w-full sm:px-4'>
								<figure className='rounded-2xl border-2 border-primary-100 bg-primary-50 p-8 text-sm leading-6'>
									<blockquote className='text-primary-900'>
										<p>{`“${testimonial.body}”`}</p>
									</blockquote>
									<figcaption className='mt-6 flex items-center gap-x-4'>
										<img
											className='h-10 w-10 rounded-full bg-secondary-100'
											src={testimonial.author.imageUrl}
											alt=''
										/>
										<div>
											<div className='font-semibold text-primary-900'>
												{testimonial.author.name}
											</div>
											<div className='text-primary-600'>{`@${testimonial.author.handle}`}</div>
										</div>
									</figcaption>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}