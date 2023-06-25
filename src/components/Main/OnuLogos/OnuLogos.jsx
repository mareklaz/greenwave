import onuIcon1 from '../../../assets/main/onu-icons/E_WEB_06.png';
import onuIcon2 from '../../../assets/main/onu-icons/E_WEB_12.png';
import onuIcon3 from '../../../assets/main/onu-icons/E_WEB_13.png';
import onuIcon4 from '../../../assets/main/onu-icons/E_WEB_14.png';

export default function OnuLogos() {
	return (
		<div className='bg-white py-24 sm:py-32'>
			<div className='mx-auto max-w-7xl px-6 lg:px-8'>
				<div className='grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2'>
					<div className='mx-auto w-full max-w-xl lg:mx-0'>
						<h2 className='text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
							Certification
						</h2>
						<p className='mt-6 text-lg leading-8 text-primary-600'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda molestias
							voluptatum nemo vero odit quisquam officiis aliquam, obcaecati fugit veniam. Non
							temporibus asperiores aspernatur quis!
						</p>
						<div className='mt-8 flex items-center gap-x-6'>
							<a
								href='#'
								className='rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600'>
								Learn more
							</a>
						</div>
					</div>
					<div className='mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8'>
						<img
							className='max-h-32 w-full object-contain object-left'
							src={onuIcon1}
							alt='6'
							width={150}
							height={150}
						/>
						<img
							className='max-h-32 w-full object-contain object-left'
							src={onuIcon2}
							alt='12'
							width={150}
							height={150}
						/>
						<img
							className='max-h-32 w-full object-contain object-left'
							src={onuIcon3}
							alt='13'
							width={160}
							height={160}
						/>
						<img
							className='max-h-32 w-full object-contain object-left'
							src={onuIcon4}
							alt='14'
							width={150}
							height={150}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
