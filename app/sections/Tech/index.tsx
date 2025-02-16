'use client';

import CardList from './CardList';
import './styles.css';

const TechSection = () => {
	return (
		<section>
			<div className='technologies-container-grid'>
				<CardList />
				<p className='typewriter'>
					As a web developver with 4+ years of experience I have had the
					opportunity to work with many different technologies throughout my web
					development <span>career.</span>
				</p>
			</div>
		</section>
	);
};

export default TechSection;
