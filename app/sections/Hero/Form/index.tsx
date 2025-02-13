import { useFormStatus } from 'react-dom';
import './styles.css';
import { sendEmail } from './actions';

type Props = {};

export function SubmitButton() {
	const { pending } = useFormStatus();

	return (
		<button className='get-in-touch-button' disabled={pending} type='submit'>
			Sign Up
		</button>
	);
}

const GetInTouch = (props: Props) => {
	return (
		<div className='form-container'>
			<h2>Get in Touch</h2>
			<form action={sendEmail}>
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
		</div>
	);
};

export default GetInTouch;
