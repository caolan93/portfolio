'use client';

import { useEffect, useRef, useState } from 'react';
import GetInTouch from './Form';
import Greeting from './Greeting';
import './styles.css';

type Props = {};

const Dialog = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	const toggleDialog = () => {
		setIsDialogOpen(!isDialogOpen);
		const dialog = dialogRef.current;
		if (dialog) {
			if (isDialogOpen) {
				dialog.close();
			} else {
				dialog.showModal();
			}
		}
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const dialog = dialogRef.current;

			//@ts-ignore
			if (dialog && isDialogOpen && event.target.tagName === 'DIALOG') {
				toggleDialog();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isDialogOpen]);

	return (
		<div className='dialog-container'>
			<button className='dialog-button' onClick={toggleDialog}>
				<span>Say Hi</span>
			</button>
			<dialog ref={dialogRef}>
				<div className='dialog-content'>
					<GetInTouch />
				</div>
			</dialog>
		</div>
	);
};

const HeroSection = (props: Props) => {
	return (
		<section className='hero-container'>
			<div className='hero-content'>
				<h2>
					<Greeting />,<br />
					i'm <br />
					caolan.
				</h2>
				<p>
					I'm a Software Engineer from Dublin, Ireland. I build high-quality and
					cutting edge web applications. Web development is my passion.
				</p>
				<Dialog />
			</div>
		</section>
	);
};

export default HeroSection;
