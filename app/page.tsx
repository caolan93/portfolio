import ExperienceSection from './sections/Experience';
import HeroSection from './sections/Hero';
import ProjectsSection from './sections/Projects';
import Resume from './sections/Resume';
import TechSection from './sections/Tech';

export default function Home() {
	return (
		<>
			<HeroSection />
			<ExperienceSection />
			<TechSection />
			<ProjectsSection />
			<Resume />
		</>
	);
}
