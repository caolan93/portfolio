import './styles.css';

export const Navbar = () => {
	return (
		<header>
			<nav className='navbar'>
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
