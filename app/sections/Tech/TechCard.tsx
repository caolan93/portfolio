'use client';

import { ReactElement, useRef } from 'react';

const TechCard = ({ icon }: { icon: ReactElement }) => {
	const cardRef = useRef<HTMLDivElement>(null);

	const addHoverClass = () => {
		if (!cardRef.current) return;
		cardRef.current.classList.remove('technology-icon-hover');
	};

	const removeHoverClass = () => {
		if (!cardRef.current) return;
		cardRef.current.classList.add('technology-icon-hover');
	};

	return (
		<button
			onMouseOver={addHoverClass}
			onMouseLeave={removeHoverClass}
			className='technology-card'>
			<div className='technology-card-content'></div>
			<div ref={cardRef} className='technology-icon technology-icon-hover'>
				{icon}
			</div>
		</button>
	);
};

export default TechCard;
