import { ArrowUpCircleIcon } from '@heroicons/react/24/outline';
import React, { useState, useEffect } from 'react';
import { useWindowScroll } from 'react-use';

const ScrollToTopButton = () => {
	const { y: pageYOffset } = useWindowScroll();
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		// Mostrar el botón cuando se haya desplazado 400 píxeles hacia abajo desde la parte superior
		setIsVisible(pageYOffset > 250);
	}, [pageYOffset]);

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<button
			className={`fixed bottom-10 right-16 ${
				isVisible ? 'opacity-100' : 'opacity-0'
			} rounded-lg bg-dark-500 px-4 py-2 text-white shadow-sm transition-opacity duration-300 hover:bg-dark-600 focus:outline-none`}
			onClick={scrollToTop}>
			<ArrowUpCircleIcon className='h-6 w-6' />
		</button>
	);
};

export default ScrollToTopButton;
