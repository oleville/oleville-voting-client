export default function postTokenToServer(tok) {
	fetch('http://localhost:4000/login/google', {
		method: 'POST',
		headers: {
			'Authorization': 'Token ' + JSON.stringify(tok)
		}}
	)
}
