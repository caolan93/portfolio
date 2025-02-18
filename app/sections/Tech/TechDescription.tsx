'use client';

import { useEffect, useRef, useState } from 'react';

const TechDescription = () => {
	const [aboutMe, setAboutMe] = useState<string | null>('');
	const text =
		"I've spent over four years developing web applications, gaining experience with a variety of technologies.  I've contributed to numerous real-world web and mobile projects, implementing best practices such as WCAG accessibility, progressive enhancement, server-side rendering, and unit tests.";

	const intervalRef = useRef<NodeJS.Timeout | null>(null);

	const startTyping = () => {
		let i = 0;

		intervalRef.current = setInterval(() => {
			if (i < text.length) {
				setAboutMe(text.substring(0, i + 1));
				i++;
			} else {
				clearInterval(intervalRef.current!);
				intervalRef.current = null;
			}
		}, 15);
	};

	useEffect(() => {
		return () => {
			if (intervalRef.current) {
				clearInterval(intervalRef.current);
			}
		};
	}, []);

	return (
		<div className='typewriter-container'>
			{!aboutMe ? (
				<div className='typewriter-button-container'>
					<button className='typewriter-button' onClick={startTyping}>
						A little bit about me
					</button>
				</div>
			) : (
				<p className='typewriter'>
					{aboutMe}
					<span />
				</p>
			)}
		</div>
	);
};

export default TechDescription;
