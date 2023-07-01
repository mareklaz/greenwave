export default function Certification() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<h2 className='text-center text-4xl font-semibold leading-8 text-primary-900'>
					Green Wave your sustainable expert - certification guarantee
				</h2>
				<p className='mt-6 text-center text-lg leading-8 text-primary-600'>
					Certify your company's sustainability efforts with Green Wave. Showcase your commitment to
					a greener future and inspire others to join the movement.
				</p>
				<div className='mx-auto mt-10 grid max-w-lg grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
					<img
						className='col-span-2 max-h-24 w-full object-contain lg:col-span-1'
						src='https://www.offsetguide.org/wp-content/uploads/2019/11/ACR_Logo.jpg'
						alt='Transistor'
						width={200}
						height={60}
					/>
					<img
						className='col-span-2 max-h-24 w-full object-contain lg:col-span-1'
						src='https://www.obpcert.org/wp-content/uploads/logo-OBPC-OBPN-2x.png'
						alt='Reform'
						width={200}
						height={60}
					/>
					<img
						className='col-span-2 max-h-24 w-full object-contain lg:col-span-1'
						src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJNbXHKqBOB2YTUO2NrTRYaHpc7ypGgRecu0fzxfUpmALrmAD5FWTbeiKMlypsrLXOTSA&usqp=CAU'
						alt='Tuple'
						width={200}
						height={60}
					/>
				</div>
			</div>
		</div>
	);
}
