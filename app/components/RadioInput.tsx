import { Dispatch, SetStateAction } from 'react';

export const RadioInput = ({
	content,
	label,
	items,
	Setter,
}: {
	content: string;
	label: string;
	items: Array<string>;
	Setter: Dispatch<SetStateAction<string>>;
}) => {
	return (
		<label className='flex items-center'>
			{label}
			{items.map((value, index) => (
				<input
					key={`${value} ${index}`}
					className='ml-2'
					type='radio'
					value={value}
					checked={content === value}
					onChange={(e) => Setter(e.target.value)}
				/>
			))}
		</label>
	);
};
