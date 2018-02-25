import React from 'react'
import {tokenify, getToken, hasToken} from '../lib/auth'
import {API_LOCATION} from '../config'

import '../App.css'

class Ballot extends React.Component {

	constructor(props) {
		super(props)

		if(!hasToken())
			window.location = '/'

		this.state = {}

		fetch(`${API_LOCATION}/ballot`, {
			headers: tokenify(getToken())
		})
		.then(res => {
			if(res.status < 400)
				return res.json()
			else
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
				(this.state && this.state.entries) ?
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
