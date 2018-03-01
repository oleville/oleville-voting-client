import { API_LOCATION } from '../config'

export function storeToken(tok) {
	window.localStorage['OV_TOKEN'] = tok
}

export function getToken(tok) {
	return window.localStorage['OV_TOKEN']
}

export function clearToken() {
	delete window.localStorage['OV_TOKEN']
}

export function tokenify(tok, headers = {}) {
	return Object.assign(headers, {
		Authorization: 'Token ' + JSON.stringify(tok)
	})
}

export function hasToken() {
	return !!window.localStorage['OV_TOKEN']
}

export function postTokenToServer(tok) {
	fetch(`${API_LOCATION}/login/google`, {
		method: 'POST',
		headers: tokenify(tok)
	})
}
