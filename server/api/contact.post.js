const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
import fetch from '@aero/http'

export default defineEventHandler(async (event) => {
	const body = await useBody(event)
	const { name, email, subject, message, captcha } = body

	if (!name || !email || !subject || !message || !captcha) {
		return {
			success: false,
			message: 'Missing required fields'
		}
	}

	if (!emailRegex.test(email)) {
		return {
			success: false,
			message: 'Invalid email address'
		}
	}

	const captcha_res = await fetch('https://hcaptcha.com')
		.post()
		.path('/siteverify')
		.body({
			response: captcha,
			secret: process.env.HCAPTCHA_SECRET
		}, 'form')
		.json()

	if (!captcha_res.success) {
		console.log(captcha_res)
		return {
			success: false,
			message: 'Invalid captcha'
		}
	}

	await fetch('https://mail.farfrom.earth')
		.post()
		.header('X-Server-API-Key', process.env.EMAIL_SECRET)
		.path('/api/v1/send/message')
		.body({
			to: ['admin@vaccinator.tech'],
			cc: ['testing@ravy.org'],
			from: 'noreply@dove.farfrom.earth',
			sender: 'noreply@dove.farfrom.earth',
			subject: 'Contact Form: ' + subject,
			plain_body: [ // for some reason vite doesn't let me use template strings
				'Name: ' + name,
				'Email: ' + email,
				'Subject: ' + subject,
				'Message: ' + message
			].join('\n')
		}, 'json')
		.json()

	return {
		success: true,
		message: 'Successfully sent message'
	}
})
