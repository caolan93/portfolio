'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ExperienceTextList = () => {
	const { ref, inView } = useInView();
	const [animated, setAnimated] = useState(false);

	useEffect(() => {
		if (inView && !animated) {
			setAnimated(true);
		}
	}, [inView, animated]);

	return (
		<div ref={ref} className='experience-container'>
			{experience.map(({ firstExp, secondExp }, index) => (
				<ExperienceText
					key={index}
					firstExp={firstExp}
					secondExp={secondExp}
					animated={animated}
				/>
			))}
		</div>
	);
};

export default ExperienceTextList;

const ExperienceText = ({
	firstExp,
	secondExp,
	animated,
}: {
	firstExp: string;
	secondExp: string;
	animated: boolean;
}) => {
	return (
		<div className={`experience ${animated && 'animate'}`}>
			<p className='experience-text'>{firstExp}</p>
			<div className='divider'>
				<div className='divider-line' />
			</div>
			<p className='experience-text'>{secondExp}</p>
		</div>
	);
};

const experience = [
	{
		firstExp: 'Frontend',
		secondExp: 'Backend',
	},
	{
		firstExp: 'Web',
		secondExp: 'Mobile',
	},
	{
		firstExp: 'SQL',
		secondExp: 'NoSQL',
	},
	{
		firstExp: 'User',
		secondExp: 'Interfaces',
	},
];
