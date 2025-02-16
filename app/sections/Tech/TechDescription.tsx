import React from 'react';
import { useTechContext } from './TechProvider';

type Props = {};

const TechDescription = (props: Props) => {
	const { techdesc } = useTechContext();
	return (
		<p className='typewriter'>
			{techdesc !== ''
				? techdesc
				: 'As a web developver with 4+ years of experience I have had the opportunity to work with many different technologies throughout my web development career.'}
			<span />
		</p>
	);
};

export default TechDescription;
