import CardList from './CardList';
import './styles.css';
import TechDescription from './TechDescription';

const TechSection = () => {
	return (
		<section className='technologies-container-grid'>
			<CardList />
			<TechDescription />
		</section>
	);
};

export default TechSection;
