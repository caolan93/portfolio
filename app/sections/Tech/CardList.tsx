'use client';

import {
	CssIcon,
	ExpressJsIcon,
	GitIcon,
	GraphqlIcon,
	HtmlIcon,
	JavascriptIcon,
	MaterialuiIcon,
	MongodbIcon,
	NextIcon,
	NodeIcon,
	ReactNativeIcon,
	ReduxIcon,
	StorybookIcon,
	SvelteIcon,
	TailwindIcon,
	TypescriptIcon,
	VitetestIcon,
	WordpressIcon,
} from '@components/Svgs';
import { ReactElement, useEffect, useRef } from 'react';
import TechCard from './TechCard';

const CardList = () => {
	const cardListRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			if (!cardListRef.current) return;

			const cards = cardListRef.current.getElementsByClassName(
				'technology-card',
			) as HTMLCollectionOf<HTMLDivElement>;

			for (const card of cards) {
				const rect = card.getBoundingClientRect();
				const x = e.clientX - rect.left;
				const y = e.clientY - rect.top;

				card.style.setProperty('--mouse-x', `${x}px`);
				card.style.setProperty('--mouse-y', `${y}px`);
			}
		};

		const container = cardListRef.current;
		if (container) {
			container.addEventListener('mousemove', handleMouseMove);
		}

		return () => {
			if (container) {
				container.removeEventListener('mousemove', handleMouseMove);
			}
		};
	}, []);

	return (
		<div ref={cardListRef} className='technologies-grid'>
			{Object.values(webTechnologies).map(({ icon }, index) => (
				<TechCard key={index} icon={icon} />
			))}
		</div>
	);
};

export default CardList;

type WebTechnology = {
	icon: ReactElement;
};

const webTechnologies: Record<string, WebTechnology> = {
	react: {
		icon: <ReactNativeIcon />,
	},
	svelte: {
		icon: <SvelteIcon />,
	},
	nextjs: {
		icon: <NextIcon />,
	},
	tailwindcss: {
		icon: <TailwindIcon />,
	},
	materialui: {
		icon: <MaterialuiIcon />,
	},
	redux: {
		icon: <ReduxIcon />,
	},
	node: {
		icon: <NodeIcon />,
	},
	typescript: {
		icon: <TypescriptIcon />,
	},
	javascript: { icon: <JavascriptIcon /> },
	css: {
		icon: <CssIcon />,
	},
	html: {
		icon: <HtmlIcon />,
	},
	mongodb: {
		icon: <MongodbIcon />,
	},
	graphql: {
		icon: <GraphqlIcon />,
	},
	express: {
		icon: <ExpressJsIcon />,
	},
	wordpress: {
		icon: <WordpressIcon />,
	},
	vitetest: {
		icon: <VitetestIcon />,
	},
	storybook: {
		icon: <StorybookIcon />,
	},
	git: {
		icon: <GitIcon />,
	},
};
