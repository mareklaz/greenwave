import { useState } from 'react';
import emailjs from 'emailjs-com';

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

emailjs.init(import.meta.env.VITE_EMAILJS_USERID);

export default function Contact() {
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				import.meta.env.VITE_EMAILJS_SERVICEID,
				import.meta.env.VITE_EMAILJS_TEMPLATEID,
				e.target,
				import.meta.env.VITE_EMAILJS_USERID
			)
			.then(
				(result) => {
					console.log('Email successfully sent!');
					setSuccessMessage('Message sent successfully.');
					setErrorMessage('');
					e.target.reset();
				},
				(error) => {
					console.error('Error sending email:', error);
					setErrorMessage('Error sending message.');
					setSuccessMessage('');
				}
			);
	}

	return (
		<div className='isolate bg-primary-50 px-6 py-24 sm:py-32 lg:px-8'>
			<div className='mx-auto max-w-2xl text-center'>
				<h2 className='text-3xl font-bold tracking-tight text-primary-900 sm:text-4xl'>
					Grow customer relationships, sustainably!
				</h2>

				<p className='mt-2 text-lg leading-8 text-primary-600'>
					Offer an end-to-end sustainable shopping experience and create transparent communications
					about your sustainability initiatives that will drive customer loyalty and increase
					revenue.
				</p>
			</div>
			<form onSubmit={sendEmail} className='mx-auto mt-16 max-w-xl sm:mt-20'>
				<div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
					<div>
						<label
							htmlFor='first-name'
							className='block text-sm font-semibold leading-6 text-primary-900'>
							First name
						</label>
						<div className='mt-2.5'>
							<input
								type='text'
								name='first-name'
								id='first-name'
								autoComplete='given-name'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div>
						<label
							htmlFor='last-name'
							className='block text-sm font-semibold leading-6 text-primary-900'>
							Last name
						</label>
						<div className='mt-2.5'>
							<input
								type='text'
								name='last-name'
								id='last-name'
								autoComplete='family-name'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label
							htmlFor='company'
							className='block text-sm font-semibold leading-6 text-primary-900'>
							Company
						</label>
						<div className='mt-2.5'>
							<input
								type='text'
								name='company'
								id='company'
								autoComplete='organization'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-primary-900 shadow-sm ring-1 ring-inset ring-primary-300 placeholder:text-primary-400 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>
					<div className='sm:col-span-2'>
						<label htmlFor='email' className='block text-sm font-semibold leading-6 text-gray-900'>
							Email
						</label>
						<div className='mt-2.5'>
							<input
								type='email'
								name='email'
								id='email'
								autoComplete='email'
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:text-sm sm:leading-6'
							/>
						</div>
					</div>

					<div className='sm:col-span-2'>
						<label
							htmlFor='message'
							className='block text-sm font-semibold leading-6 text-gray-900'>
							Message
						</label>
						<div className='mt-2.5'>
							<textarea
								name='message'
								id='message'
								rows={4}
								className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary-600 sm:text-sm sm:leading-6'
								defaultValue={''}
							/>
						</div>
					</div>
				</div>
				{successMessage && <div className='mb-4 text-green-600'>{successMessage}</div>}
				{errorMessage && <div className='mb-4 text-red-600'>{errorMessage}</div>}
				<div className='mt-10'>
					<button
						type='submit'
						className='block w-full rounded-md bg-secondary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-primary-50 shadow-sm hover:bg-secondary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600'>
						Let's talk
					</button>
				</div>
			</form>
		</div>
	);
}
