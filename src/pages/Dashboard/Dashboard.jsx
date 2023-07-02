import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Dashboard({ children }) {
	return (
		<>
			<div className='min-h-full'>
				<header className='bg-primary-700 shadow'>
					<div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
						<div className='flex flex-row justify-between'>
							<div>
								<Link to='/'>
									<h1 className='text-3xl font-bold tracking-tight text-white'>Dashboard</h1>
								</Link>
								<p className='mt-3 text-lg font-normal tracking-tight text-white'>@bluebanana</p>
							</div>
							<div>
								<img
									src='https://cdn.shopify.com/s/files/1/0122/2724/8185/files/LOGO-X-Vertical_247x.png?v=1631721198'
									alt=''
									className='w-16'
								/>
							</div>
						</div>
					</div>
				</header>
				<main>
					<div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>{children}</div>
				</main>
			</div>
		</>
	);
}
