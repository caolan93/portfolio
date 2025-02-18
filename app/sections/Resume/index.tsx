import { DownloadIcon } from '@components/Svgs';
import './styles.css';

const Resume = () => {
	return (
		<section className='resume-section'>
			<h2>Resume</h2>
			<a href='../../../lib/assets/files/CF_CV_2025.pdf' download='CF_CV_2025'>
				<DownloadIcon />
			</a>
		</section>
	);
};

export default Resume;
