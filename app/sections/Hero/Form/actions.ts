'use server';

import sendGrid from '@sendgrid/mail';

export const sendEmail = async (formData: FormData) => {
	sendGrid.setApiKey(process.env.SENDGRID_API_KEY ?? '');
	const name = formData.get('name');
	const emailValue = formData.get('email');
	const messageValue = formData.get('message');

	if (typeof emailValue === 'string' && typeof messageValue === 'string') {
		const email = emailValue;
		const message = messageValue;
		const msg = {
			to: 'caolan.fanning@gmail.com',
			from: 'caolan.fanning+sendgrid@gmail.com',
			replyTo: email,
			subject: `${name} wants to get in touch`,
			text: message,
		};

		try {
			if (!Object.values(msg).every((formData) => formData)) {
				throw new Error('Form data cannot be empty of undefined');
			}
			await sendGrid.send(msg);
		} catch (e: any) {
			console.error(e.response);
		}
	} else {
		console.error('Invalid email or message format.');
	}
};
