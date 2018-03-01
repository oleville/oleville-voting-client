import React from 'react'
import Home from '../home'
import Ballot from '../ballot'
import { Switch, Route } from 'react-router-dom'

export const Main = () => (
	<main>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route exact path="/ballot" component={Ballot} />
		</Switch>
	</main>
)

export default Main
