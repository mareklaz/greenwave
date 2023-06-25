import { useState } from 'react';
import Stats from './Stats/Stats';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

import MobileBackgroundImage from '../../../assets/imagen-mobile.png';

export default function Hero() {
	return (
		<div className='bg-primary-900'>
			<div className='relative isolate overflow-hidden pt-14'>
				<img
					src='https://images.unsplash.com/photo-1461503312594-019be44dd599?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80&blend=415546&sat=-100&exp=15&blend-mode=multiply'
					alt=''
					className='absolute inset-0 -z-10 h-full w-full object-cover'
				/>
				<div
					className='absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
					aria-hidden='true'>
					<div
						className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#8cbcac] to-[#31544b] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
				<div className='sm:py-23 mx-auto max-w-7xl px-6 py-24 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-24'>
					<div className='mx-auto max-w-4xl lg:mx-0 lg:flex-auto'>
						<h1 className='mt-10 max-w-lg text-4xl font-bold tracking-tight text-white sm:text-6xl'>
							Ride the Green Wave, shop smarter:
						</h1>
						<h2 className='mt-6 text-3xl leading-8 text-white'>
							Surfing towards ocean conservation
						</h2>
						<div className='mt-10 flex items-center gap-x-6'>
							<Link
								href='/'
								className='rounded-md bg-secondary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-secondary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-400'>
								Request a Demo
							</Link>
						</div>

						<Stats />
					</div>
					<div className='mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow'>
						<svg
							viewBox='0 0 366 729'
							role='img'
							className='mx-auto w-[16.875rem] max-w-full drop-shadow-xl'>
							<title>App screenshot</title>
							<defs>
								<clipPath id='2ade4387-9c63-4fc4-b754-10e687a0d332'>
									<rect width={316} height={684} rx={36} />
								</clipPath>
							</defs>
							<path
								fill='#4B5563'
								d='M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z'
							/>
							<path
								fill='#343E4E'
								d='M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z'
							/>
							<foreignObject
								width={316}
								height={684}
								transform='translate(24 24)'
								clipPath='url(#2ade4387-9c63-4fc4-b754-10e687a0d332)'>
								<img src={MobileBackgroundImage} alt='' />
							</foreignObject>
						</svg>
					</div>
				</div>

				<div
					className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'
					aria-hidden='true'>
					<div
						className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8cbcac] to-[#31544b] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
						style={{
							clipPath:
								'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
						}}
					/>
				</div>
			</div>
		</div>
	);
}
