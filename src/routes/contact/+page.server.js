import { HCAPTCHA_SECRET } from '$env/static/private';

export const actions = {
	default: async (event) => {
		// get form data
        const data = Object.fromEntries(await event.request.formData())

        const name = data['Name'];
        const school = data['School'];
        const email = data['Email'];
        const message = data['Message'];

        const hcaptcha_response = data['h-captcha-response'];

        // then POST to https://api.hcaptcha.com/siteverify
        const response = await fetch('https://api.hcaptcha.com/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams({
                secret : HCAPTCHA_SECRET,
                response : hcaptcha_response
              })
        });
        const response_data = await response.json();
        console.log(response_data);
        if(response_data.success){
            console.log('Captcha passed and form to be submitted!'); // TODO: change this to submit the actual form via Sheets API
        }
	}
};