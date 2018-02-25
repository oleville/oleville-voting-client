import React from 'react'
import FontAwesome from 'react-fontawesome'
import GoogleLogin from 'react-google-login'
import postTokenToServer from '../lib/auth'
import {CLIENT_ID} from '../config'

class Home extends React.Component {

	googleResponseSuccess(response) {
		postTokenToServer(response.tokenObj.id_token)
	}

	googleResponseFailure(response) {
		console.log(response)
	}

	render() {
		return (
			<div>
			<p> Welcome to Oleville Voting! </p>
			<p> Please log in to access your ballot. </p>
			<GoogleLogin clientId={CLIENT_ID}
			buttonText='Login'
			responseType='token'
			hostedDomain='stolaf.edu'
			onSuccess={this.googleResponseSuccess}
			onFailure={this.googleResponseFailure}
      >
			<FontAwesome name='google' /> <span> Sign in with Google </span>
			</GoogleLogin>
			</div>
		)
	}
}

export default Home
