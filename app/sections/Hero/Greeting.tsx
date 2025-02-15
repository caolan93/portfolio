'use client';

import { greetings } from '@lib/constants';
import { useEffect, useState } from 'react';

const Greeting = () => {
	const [currentGreeting, setCurrentGreeting] = useState(greetings[0]);

	useEffect(() => {
		let greetingIndex = 0;
		const intervalId = setInterval(() => {
			setCurrentGreeting(greetings[greetingIndex]);
			greetingIndex = (greetingIndex + 1) % greetings.length;
		}, 3000);

		return () => clearInterval(intervalId);
	}, []);
	return <span>{currentGreeting}</span>;
};

export default Greeting;
