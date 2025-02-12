import { DiscordIcon } from '../Svgs/DiscordIcon';
import { GithubIcon } from '../Svgs/GithubIcon';
import { LinkedinIcon } from '../Svgs/LinkedinIcon';
import './styles.css';

type Props = {};

export const Footer = (props: Props) => {
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
