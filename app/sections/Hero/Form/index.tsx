import React from 'react';
import './styles.css';

type Props = {};

const GetInTouch = (props: Props) => {
	return (
		<div className='form-container'>
			<h2>Get in Touch</h2>
			<form action=''>
				<label htmlFor=''>
					Name
					<input name='name' type='text' required placeholder='Name...' />
				</label>
				<label htmlFor=''>
					Email
					<input name='name' type='email' required placeholder='Email...' />
				</label>
				<label htmlFor=''>
					Message
					<textarea
						name='message'
						required
						rows={10}
						placeholder="What's going on..?"
					/>
				</label>
				<button>Send</button>
			</form>
		</div>
	);
};

export default GetInTouch;
