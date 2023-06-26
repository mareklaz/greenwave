import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import { Link, NavLink } from 'react-router-dom';
import LOGO from '../assets/logo.svg';

const navigation = [
	{ name: 'Product', to: '/', current: true },
	{ name: 'Solutions', to: 'solutions', current: false },
	{ name: 'Resources', to: 'resources', current: false },
	{ name: 'Impact', to: 'impact', current: false },
	{ name: 'How it Works', to: 'how-it-works', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
	return (
		<Disclosure as='nav' className=' bg-secondary-800'>
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
											src={LOGO}
											alt='Green Wave Company'
										/>
										<img
											className='hidden h-8 w-auto lg:block'
											src={LOGO}
											alt='Green Wave Company'
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
													? 'rounded-md bg-secondary-400 px-3 py-2 text-sm font-medium text-white'
													: 'rounded-md px-3 py-2 text-sm font-medium text-secondary-300 hover:bg-secondary-700 hover:text-white'
											}>
											{item.name}
										</NavLink>
									))}
								</div>
							</div>
							<div className='flex items-center'>
								<div className='flex-shrink-0'>
									<Link
										to='/contact'
										type='button'
										className='relative hidden items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:inline-flex'>
										Request a Demo
									</Link>
								</div>
							</div>
						</div>
					</div>

					<Disclosure.Panel className='md:hidden'>
						<div className='space-y-1 px-2 pb-3 pt-2 sm:px-3'>
							{navigation.map((item) => (
								<NavLink
									key={item.name}
									to={item.to}
									className={classNames(
										item.current
											? 'bg-primary-900 text-white'
											: 'text-primary-300 hover:bg-primary-700 hover:text-white',
										'block rounded-md px-3 py-2 text-base font-medium'
									)}
									aria-current={item.current ? 'page' : undefined}>
									<Disclosure.Button>{item.name}</Disclosure.Button>
								</NavLink>
							))}
						</div>
						<div className='border-t border-primary-700 pb-3 pt-4'>
							<div className='flex items-center px-5 sm:px-6'>
								<Disclosure.Button>
									<Link
										to='/contact'
										type='button'
										className='relative hidden items-center gap-x-1.5 rounded-md bg-primary-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 sm:inline-flex'>
										Request a Demo
									</Link>
								</Disclosure.Button>
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
}
