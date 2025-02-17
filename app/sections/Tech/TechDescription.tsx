'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {};

const TechDescription = (props: Props) => {
	const [aboutMe, setAboutMe] = useState<string | null>('');
	const text = `A web developer with 4+ years of experience I have had the opportunity to work with many different technologies throughout my web development career. I have been a part of multiple real-world web and mobile applications, utilizing best practices such as WCAG accessibility standards, progressive enhancement, server-side rendering, and unit tests.`;
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
