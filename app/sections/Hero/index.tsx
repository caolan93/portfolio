type Props = {};

import BootstrapIcon from '@svgs/BootstrapIcon';
import CSSIcon from '@svgs/CssIcon';
import HtmlIcon from '@svgs/HtmlIcon';
import JavascriptIcon from '@svgs/JavascriptIcon';
import MaterialuiIcon from '@svgs/MaterialuiIcon';
import NextIcon from '@svgs/NextIcon';
import NodeIcon from '@svgs/NodeIcon';
import ReactNativeIcon from '@svgs/ReactNativeIcon';
import ReduxIcon from '@svgs/ReduxIcon';
import SvelteIcon from '@svgs/SvelteIcon';
import TailwindIcon from '@svgs/TailwindIcon';
import TypescriptIcon from '@svgs/TypescriptIcon';
import './styles.css';

const webTechnologies = [
	{
		icon: <ReactNativeIcon />,
		description: 'Used React Native',
	},
	{
		icon: <SvelteIcon />,
		description: 'Used Svelte',
	},

	// <NextIcon />,
	// <TailwindIcon />,
	// <MaterialuiIcon />,
	// <BootstrapIcon />,
	// <ReduxIcon />,
	// <NodeIcon />,
	// <TypescriptIcon />,
	// <JavascriptIcon />,
	// <HtmlIcon />,
	// <CSSIcon />,
];

const HeroSection = (props: Props) => {
	return (
		<section>
			<h3>Creating Cutting Edge Web Applications</h3>
			<div className='technologies-container-grid'>
				<div className='technologies-grid'>
					{Object.values(webTechnologies).map((technology, index) => (
						<div key={index} className='technology'>
							<div className='technology-icon'>{technology.icon}</div>
							<div className='technology-description'>
								<p>{technology.description}</p>
							</div>
						</div>
					))}
				</div>
				<div>
					<p>
						Experienced web developer with a growing number of modern
						technologies.
						<br />
						<br />
						Working in quick fast paced start ups and agencies has given me the
						opportunity to make cutting edge web applications with an array of
						technologies.
						<br />
						<br />
						These opportunities have helped me challenge myself, learn and grow
						in an ever changing industry.
					</p>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
