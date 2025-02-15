'use client';
import { memo, ReactElement, useRef } from 'react';

const TechCard = ({ icon, name }: { icon: ReactElement; name: string }) => {
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
			onMouseEnter={addHoverClass}
			onMouseLeave={removeHoverClass}
			className='technology-card'>
			<div className='technology-card-content'></div>
			<div ref={cardRef} className='technology-icon technology-icon-hover'>
				{icon}
			</div>
		</button>
	);
};

export default memo(TechCard);
