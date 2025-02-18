import { DiscordIcon, GithubIcon, LinkedinIcon } from '@components/Svgs';
import './styles.css';

export const Footer = () => {
	return (
		<footer>
			<ul>
				<li>
					<a
						className='linkedin'
						href='https://www.linkedin.com/in/caolan-fanning-1a7229157/'>
						<LinkedinIcon />
						<span>LinkedIn</span>
					</a>
				</li>
				<li>
					<a className='github' href='https://github.com/caolan93'>
						<GithubIcon />
						<span>Github</span>
					</a>
				</li>
				<li>
					<a
						className='discord'
						href='https://discord.com/channels/1216860101810454588/1216860101810454590'>
						<DiscordIcon />
						<span>Discord</span>
					</a>
				</li>
			</ul>
		</footer>
	);
};
