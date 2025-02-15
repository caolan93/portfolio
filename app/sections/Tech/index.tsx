'use client';

import ReactNativeIcon from '@components/Svgs/ReactNativeIcon';
import SvelteIcon from '@components/Svgs/SvelteIcon';
import {
	Dispatch,
	MouseEventHandler,
	ReactElement,
	Ref,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from 'react';
import './styles.css';
import NextIcon from '@components/Svgs/NextIcon';
import TailwindIcon from '@components/Svgs/TailwindIcon';
import MaterialuiIcon from '@components/Svgs/MaterialuiIcon';
import ReduxIcon from '@components/Svgs/ReduxIcon';
import NodeIcon from '@components/Svgs/NodeIcon';
import HtmlIcon from '@components/Svgs/HtmlIcon';
import JavascriptIcon from '@components/Svgs/JavascriptIcon';
import TypescriptIcon from '@components/Svgs/TypescriptIcon';
import CssIcon from '@components/Svgs/CssIcon';

type WebTechnology = {
	icon: ReactElement;
	description: string;
};

const webTechnologies: Record<string, WebTechnology> = {
	react: {
		icon: <ReactNativeIcon />,
		description: 'Used React Native',
	},
	svelte: {
		icon: <SvelteIcon />,
		description: 'Used Svelte',
	},
	nextjs: {
		icon: <NextIcon />,
		description: 'Used NextJS',
	},
	tailwindcss: {
		icon: <TailwindIcon />,
		description: 'Used TailwindCSS',
	},
	materialui: {
		icon: <MaterialuiIcon />,
		description: 'Used MaterialuiIcon',
	},
	redux: {
		icon: <ReduxIcon />,
		description: 'Used ReduxIcon',
	},
	node: {
		icon: <NodeIcon />,
		description: 'Used NodeIcon',
	},
	typescript: {
		icon: <TypescriptIcon />,
		description: 'Used TypescriptIcon',
	},
	javascript: { icon: <JavascriptIcon />, description: 'Used JavascriptIcon' },
	css: {
		icon: <CssIcon />,
		description: 'Used CSSIcon	',
	},
	html: {
		icon: <HtmlIcon />,
		description: 'Used HtmlIcon',
	},
};

const TechCard = ({
	// selectTechnology,
	icon,
	name,
}: {
	// selectTechnology: (key: string) => void;
	icon: ReactElement;
	name: string;
}) => {
	const cardRef = useRef(null);

	return (
		<button className='technology-card'>
			<div className='technology-card-content'></div>
			<div className='technology-icon'>{icon}</div>
		</button>
	);
};

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
			{Object.entries(webTechnologies).map(([key, { icon }], index) => (
				<TechCard key={index} name={key} icon={icon} />
			))}
		</div>
	);
};

const TechSection = () => {
	return (
		<section>
			<div className='technologies-container-grid'>
				<CardList />
			</div>
		</section>
	);
};

export default TechSection;
