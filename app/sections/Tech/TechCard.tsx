'use client';
import { ReactElement, useRef } from 'react';
import { useTechContext } from './TechProvider';

const TechCard = ({ icon, name }: { icon: ReactElement; name: string }) => {
	const cardRef = useRef<HTMLDivElement>(null);
	const { setTechDesc, techdesc } = useTechContext();

	const addHoverClass = () => {
		if (!cardRef.current) return;
		setTechDesc(name);
		cardRef.current.classList.remove('technology-icon-hover');
	};

	const removeHoverClass = () => {
		if (!cardRef.current) return;
		setTechDesc('');
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
