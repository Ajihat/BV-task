import { useState, useEffect } from 'react';

const VIEWPORT_BREAKPOINT = 768;

export const useDetectDevice = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < VIEWPORT_BREAKPOINT);
		};
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return isMobile;
};
