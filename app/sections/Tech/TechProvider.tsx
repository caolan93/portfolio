'use client';

import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from 'react';

const TechContext = createContext<{
	techdesc: string;
	setTechDesc: Dispatch<SetStateAction<string>>;
}>({
	techdesc: '',
	setTechDesc: () => {},
});

export const TechProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [techdesc, setTechDesc] = useState('');

	const value = {
		techdesc,
		setTechDesc,
	};

	return <TechContext.Provider value={value}>{children}</TechContext.Provider>;
};

export const useTechContext = () => {
	const context = useContext(TechContext);
	if (!context) {
		throw new Error('useTechContext must be used within a TechProvider');
	}
	return context;
};
