import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';
import './styles.css';

interface Technology {
	name: string;
	color?: string;
}

interface ProjectCardProps {
	title?: string;
	description?: string;
	imageUrl?: string;
	technologies?: Technology[];
	liveUrl?: string;
	githubUrl?: string;
}

export default function ProjectCard({
	title = 'Project Title',
	description = 'This is a description of my awesome project. It showcases my skills in various technologies and was a great learning experience.',
	imageUrl = '/placeholder.svg?height=200&width=400',
	technologies = [
		{ name: 'React' },
		{ name: 'TypeScript' },
		{ name: 'Tailwind CSS' },
		{ name: 'Next.js' },
	],
	liveUrl,
	githubUrl,
}: ProjectCardProps) {
	return (
		<div className='project-card'>
			<div className='project-card__image-container'>
				<Image
					src={imageUrl || '/placeholder.svg'}
					alt={`Thumbnail for ${title}`}
					fill
					className='project-card__image'
					priority
				/>
			</div>
			<div className='project-card__content'>
				<div className='project-card__header'>
					<h3 className='project-card__title'>{title}</h3>
					<p className='project-card__description'>{description}</p>
				</div>
				<div className='project-card__body'>
					<div className='project-card__technologies'>
						{technologies.map((tech, index) => (
							<span key={index} className='project-card__tech-badge'>
								{tech.name}
							</span>
						))}
					</div>
				</div>
				{(liveUrl || githubUrl) && (
					<div className='project-card__footer'>
						{liveUrl && (
							<a
								href={liveUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='project-card__button'>
								<ExternalLink className='project-card__button-icon' />
								<span>Live Demo</span>
							</a>
						)}
						{githubUrl && (
							<a
								href={githubUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='project-card__button'>
								<Github className='project-card__button-icon' />
								<span>GitHub</span>
							</a>
						)}
					</div>
				)}
			</div>
		</div>
	);
}
