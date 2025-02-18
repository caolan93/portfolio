import { DownloadIcon } from '@components/Svgs';

const Resume = () => {
	return (
		<section className='resume-section'>
			<h2>Resume</h2>
			<a href='' download='proposed_file_name'>
				<DownloadIcon />
			</a>
		</section>
	);
};

export default Resume;
