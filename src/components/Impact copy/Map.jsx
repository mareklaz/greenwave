import MapBackground from '../../assets/map-background.png';

export default function Map() {
	return (
		<div className='relative isolate overflow-hidden bg-gray-900 px-6 py-36 sm:py-64 lg:px-8'>
			<img src={MapBackground} className='absolute inset-0 -z-10 h-full w-full object-cover' />
			<div
				className='hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl'
				aria-hidden='true'>
				<div
					className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#8cbcac] to-[#31544b] opacity-20'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div
				className='absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu'
				aria-hidden='true'>
				<div
					className='aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#8cbcac] to-[#31544b] opacity-20'
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			{/* <div className='mx-auto max-w-6xl text-center'>
				<h2 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
					Unleash your brand's impactful story with global offset projects
				</h2>
				<p className='mt-6 text-lg leading-8 text-gray-300'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, odit asperiores! Eaque
					nihil dicta odit dolores explicabo quo fuga quos, vitae saepe quis? Numquam recusandae ab
					at doloremque nesciunt rem! At doloremque distinctio amet dolorem autem quis consequatur
					aut provident aliquid hic voluptates fugit vitae debitis explicabo est natus, facilis iste
					ad optio reprehenderit molestiae quas id. Eaque, laudantium fugit!
				</p>
			</div> */}
		</div>
	);
}
