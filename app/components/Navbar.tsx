import React from 'react';

type Props = {};

export const Navbar = (props: Props) => {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Experience</a>
					</li>
					{/* TODO: ADD IN PROJECTS */}
					<li>
						<a href='#'>Contact</a>
					</li>
				</ul>
			</nav>
		</header>
	);
};
