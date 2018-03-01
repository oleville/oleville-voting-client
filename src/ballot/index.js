import React from 'react'
import {tokenify, getToken, hasToken} from '../lib/auth'
import {API_LOCATION} from '../config'

import '../App.css'

class Ballot extends React.Component {

	constructor(props) {
		super(props)

		this.state = {}
	}

	componentWillMount() {
		if(!hasToken()) {
			alert('missing token, grumble grumble')
			window.location = '/'
		}

		fetch(`${API_LOCATION}/ballot`, {
			headers: tokenify(getToken())
		})
			.then(res => {
				// TODO better logic
				if(res.status < 400)
					return res.json()
				else
					// TODO better error message
					throw new Error("Request error")
			})
			.then(items => {
				this.setState({entries: items})
				window.items = items
			})
			.catch(() => window.location = '/')
	}

	render() {
		return (
			<div>
			{
				// TODO prettify this and turn it into a form
				(this.state.entries) ?
					this.state.entries.map(entry => {
						return <code key={entry['id']}>{JSON.stringify(entry)}</code>
					})
				:
					<p> No entries</p>
			}
			</div>
		)
	}
}

export default Ballot
