import Image from 'next/image';
import React from 'react';
import linkedIn from '@/lib/assets/icons/linkedIn.svg';
import github from '@/lib/assets/icons/github.svg';
import discord from '@/lib/assets/icons/discord.svg';
import './styles.css';
import { GithubIcon } from '../GithubIcon';

type Props = {};

export const Footer = (props: Props) => {
	return (
		<footer>
			<ul>
				<li>
					<a href='https://www.linkedin.com/in/caolan-fanning-1a7229157/'>
						<Image
							className='linkedIn'
							src={linkedIn}
							alt='LinkedIn Icon'
							height={24}
							width={24}
						/>
						<span>LinkedIn</span>
					</a>
				</li>
				<li>
					<a href='https://github.com/caolan93'>
						<GithubIcon />
						<span>Github</span>
					</a>
				</li>
				<li>
					<a href='https://discord.com/channels/1216860101810454588/1216860101810454590'>
						<Image
							className='discord'
							src={discord}
							alt='Discord Icon'
							height={24}
							width={24}
						/>
						<span>Discord</span>
					</a>
				</li>
			</ul>
		</footer>
	);
};
