'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import GetInTouch from './Form';
import Greeting from './Greeting';
import './styles.css';

const Dialog = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const dialogRef = useRef<HTMLDialogElement>(null);

	const toggleDialog = useCallback(() => {
		const dialog = dialogRef.current;
		if (dialog) {
			if (isDialogOpen) {
				setIsDialogOpen(false);
				dialog.close();
			} else {
				setIsDialogOpen(true);
				dialog.showModal();
			}
		}
	}, [isDialogOpen]);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const dialog = dialogRef.current;

			if (
				dialog &&
				isDialogOpen &&
				(event.target as Element).tagName === 'DIALOG'
			) {
				toggleDialog();
			}
		};

		document.addEventListener('click', handleClickOutside);

		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [isDialogOpen, toggleDialog]);

	return (
		<div className='dialog-container'>
			<button className='dialog-button' onClick={toggleDialog}>
				<span>Say Hi</span>
			</button>
			<dialog ref={dialogRef} onClose={() => setIsDialogOpen(false)}>
				<div className='dialog-content'>
					<GetInTouch />
				</div>
			</dialog>
		</div>
	);
};

const HeroSection = () => {
	return (
		<section className='hero-container'>
			<div className='hero-content'>
				<h2 className='hero-title'>
					<Greeting />,<br />
					{`i'm`}
					<br />
					caolan.
				</h2>
				<p>
					{`I'm`} a Software Engineer from Dublin, Ireland. I build high-quality
					and cutting edge web applications. Web development is my passion.
				</p>
				<Dialog />
			</div>
		</section>
	);
};

export default HeroSection;
