import React from 'react'
import FontAwesome from 'react-fontawesome'
import GoogleLogin from 'react-google-login'
import { storeToken, hasToken, postTokenToServer } from '../lib/auth'
import { CLIENT_ID } from '../config'

import '../App.css'

class Home extends React.Component {
	googleResponseSuccess(response) {
		let token = response.tokenObj.id_token
		postTokenToServer(response.tokenObj.id_token)
		storeToken(token)

		// TODO make the DB not race
		setTimeout(() => {
			window.location = '/ballot'
		}, 500)
	}

	googleResponseFailure(response) {
		console.log(response)
	}

	render() {
		return (
			<div>
				<p> Welcome to Oleville Voting! </p>
				<p> Please log in to access your ballot. </p>
				<GoogleLogin
					clientId={CLIENT_ID}
					buttonText="Login"
					className="login-gbutton"
					responseType="token"
					hostedDomain="stolaf.edu"
					onSuccess={this.googleResponseSuccess}
					onFailure={this.googleResponseFailure}
				>
					<FontAwesome name="google" />{' '}
					<span> {hasToken() ? 'Sign in with Google' : 'Signed in.'} </span>
				</GoogleLogin>
			</div>
		)
	}
}

export default Home
