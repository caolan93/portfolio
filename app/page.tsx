import HeroSection from './sections/Hero';
import Resume from './sections/Resume';
import TechSection from './sections/Tech';

export default function Home() {
	return (
		<>
			<HeroSection />
			<TechSection />
			{/* Projects */}
			<Resume />
		</>
	);
}
