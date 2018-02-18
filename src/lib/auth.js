import { API_LOCATION } from '../config'

export default function postTokenToServer(tok) {
	fetch(`http://${API_LOCATION}/login/google`, {
		method: 'POST',
		headers: {
			'Authorization': 'Token ' + JSON.stringify(tok)
		}}
	)
}
