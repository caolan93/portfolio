import CardList from './CardList';
import './styles.css';
import TechDescription from './TechDescription';

const TechSection = () => {
	return (
		<section className='technologies-container-grid'>
			{/* <h2>
				Some of the technologies I have worked with on a day-to-day basis are
				listed to the left.
			</h2> */}
			<CardList />
			<TechDescription />
		</section>
	);
};

export default TechSection;
