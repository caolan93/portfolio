import ProjectCard from './ProjectCard';
import './styles.css';

const ProjectsSection = () => {
	return (
		<section className='project-grid'>
			{Array.from({ length: 10 }).map((_, index) => (
				<ProjectCard key={index} />
			))}
		</section>
	);
};

export default ProjectsSection;
