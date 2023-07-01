export default function CompaniesLogo() {
	return (
		<div className='bg-primary-50 py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<h2 className='text-center text-4xl font-semibold leading-8 text-primary-900'>
					Our partners and collaborators
				</h2>
				<div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5'>
					<img
						className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/WooCommerce_logo.svg/2560px-WooCommerce_logo.svg.png'
						alt='WooCommerce'
						width={158}
						height={48}
					/>
					<img
						className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Wish_logo.svg/2560px-Wish_logo.svg.png'
						alt='Wish'
						width={158}
						height={48}
					/>
					<img
						className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Zalando-Logo.svg/2560px-Zalando-Logo.svg.png'
						alt='Zalando'
						width={158}
						height={48}
					/>
					<img
						className='col-span-2 max-h-24 w-full object-contain sm:col-start-2 lg:col-span-1'
						src='https://s3-eu-west-1.amazonaws.com/tpd/logos/5e00a6834cfffe0001976f0c/0x0.png'
						alt='Blue Banana'
						width={158}
						height={48}
					/>
					<img
						className='col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1'
						src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Patagonia_%28Unternehmen%29_logo.svg/2560px-Patagonia_%28Unternehmen%29_logo.svg.png'
						alt='Patagonia'
						width={158}
						height={48}
					/>
				</div>
			</div>
		</div>
	);
}
