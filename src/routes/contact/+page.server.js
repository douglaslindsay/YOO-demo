import { google } from 'googleapis';
import fs from 'fs';
import path from 'path';

import { HCAPTCHA_SECRET, CLIENT_EMAIL, PRIVATE_KEY, SPREADSHEET_ID, SHEET_NAME } from '$env/static/private';

const auth = new google.auth.JWT(
    CLIENT_EMAIL,
    null,
    PRIVATE_KEY.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/spreadsheets']
  );

const sheets = google.sheets({ version: 'v4', auth: auth });

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
        // some error handling here might also be good (and general validation really - check the email contains @, that the fields are nonempty, not too long, etc - and maybe a redirect?)
        if(response_data.success){
            console.log("Submitting a response to the Sheets API...");
            try {
                await sheets.spreadsheets.values.append({
                    spreadsheetId: SPREADSHEET_ID,
                    range: SHEET_NAME,
                    valueInputOption: 'USER_ENTERED',
                    resource: {
                    values: [[name, school, email, message]]
                    }
                });
            } catch (error) {
                console.error("Error appending data:",error);
            }
        }
	}
};