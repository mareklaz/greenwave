import { Fragment } from 'react';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';

const user = {
	name: 'Tom Cook',
	email: 'tom@example.com',
	imageUrl:
		'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};
const navigation = [
	{ name: 'Product', to: '/', current: true },
	{ name: 'Solutions', to: '/solutions', current: false },
	{ name: 'Resources', to: '/resources', current: false },
	{ name: 'Members', to: '/members', current: false },
];
const userNavigation = [
	{ name: 'Your Profile', to: '#' },
	{ name: 'Settings', to: '#' },
	{ name: 'Sign out', to: '#' },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	return (
		<Disclosure as='nav' className='navbar-fixed bg-primary-800 shadow-sm'>
			{({ open }) => (
				<>
					<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
						<div className='flex h-16 justify-between'>
							<div className='flex'>
								<div className='-ml-2 mr-2 flex items-center md:hidden'>
									{/* Mobile menu button */}
									<Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-primary-400 hover:bg-primary-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
										<span className='sr-only'>Open main menu</span>
										{open ? (
											<XMarkIcon className='block h-6 w-6' aria-hidden='true' />
										) : (
											<Bars3Icon className='block h-6 w-6' aria-hidden='true' />
										)}
									</Disclosure.Button>
								</div>
								<div className='flex flex-shrink-0 items-center'>
									<Link to='/'>
										<img
											className='block h-8 w-auto lg:hidden'
											src='https://tailwindui.com/img/logos/mark.svg?color=primary&shade=500'
											alt='Your Company'
										/>
										<img
											className='hidden h-8 w-auto lg:block'
											src='https://tailwindui.com/img/logos/mark.svg?color=primary&shade=500'
											alt='Your Company'
										/>
									</Link>
								</div>
								<div className='hidden md:ml-6 md:flex md:items-center md:space-x-4'>
									{navigation.map((item) => (
										<NavLink
											key={item.name}
											to={item.to}
											className={({ isActive }) =>
												isActive
													? 'rounded-md bg-primary-900 px-3 py-2 text-sm font-medium text-white'
													: 'rounded-md px-3 py-2 text-sm font-medium text-primary-300 hover:bg-primary-700 hover:text-white'
											}
											aria-current={item.current ? 'page' : undefined}>
											{item.name}
										</NavLink>
									))}
								</div>
							</div>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<button
										type='button'
										className='relative hidden items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:inline-flex'>
										<ArrowDownTrayIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
										Start & Download
									</button>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='md:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as='a'
									to={item.to}
									className={classNames(
										item.current
											? 'bg-primary-900 text-white'
											: 'text-primary-300 hover:bg-primary-700 hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
						<div className='border-t border-primary-700 pb-3 pt-4'>
							<div className='flex items-center px-5 sm:px-6'>
								<button
									type='button'
									className='relative inline-flex items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500'>
									<ArrowDownTrayIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
									Start & Download
								</button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
