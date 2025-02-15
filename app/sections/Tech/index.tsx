'use client';

import CardList from './CardList';
import './styles.css';

const TechSection = () => {
	return (
		<section>
			<div className='technologies-container-grid'>
				<CardList />
			</div>
		</section>
	);
};

export default TechSection;
