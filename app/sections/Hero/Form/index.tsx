'use client';

import { useFormStatus } from 'react-dom';
import './styles.css';
import { sendEmail } from './actions';
import { useActionState } from 'react';
import AlertMessage from './AlertMessage';

const initialState = {
	status: '',
	message: '',
};

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button className='get-in-touch-button' disabled={pending} type='submit'>
			Send Message
		</button>
	);
}

const GetInTouch = () => {
	const [state, formAction] = useActionState(sendEmail, initialState);

	return (
		<div className='form-container'>
			<h2>Get in Touch</h2>
			<AlertMessage status={state.status} message={state.message} />
			{state.status !== 'status' && (
				<form action={formAction}>
					<label htmlFor=''>
						Name
						<input name='name' type='text' required placeholder='Name...' />
					</label>
					<label htmlFor=''>
						Email
						<input name='email' type='email' required placeholder='Email...' />
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
					<SubmitButton />
				</form>
			)}
		</div>
	);
};

export default GetInTouch;
