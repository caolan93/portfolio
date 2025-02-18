import { DownloadIcon } from '@components/Svgs';
import './styles.css';

const Resume = () => {
	return (
		<section className='resume-section'>
			<h2>Resume</h2>
			<a href='/files/CF_CV_2025.pdf' download>
				<DownloadIcon />
			</a>
			<a
				className='online-resume'
				href='https://docs.google.com/document/d/1PaesW078Ut32GhbYnld0pTV3beQp4unV173WTKwOUho/edit?usp=sharing'
				target='_blank'>
				View online
			</a>
		</section>
	);
};

export default Resume;
