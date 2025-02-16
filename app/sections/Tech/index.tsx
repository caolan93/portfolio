'use client';

import CardList from './CardList';
import './styles.css';
import TechDescription from './TechDescription';
import { TechProvider } from './TechProvider';

const TechSection = () => {
	return (
		<TechProvider>
			<section>
				<div className='technologies-container-grid'>
					<CardList />
					<TechDescription />
				</div>
			</section>
		</TechProvider>
	);
};

export default TechSection;
