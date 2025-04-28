import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import CV from './CV/CV';
import * as serviceWorker from './serviceWorker';

const routes = (
	<Router>
		<Switch>
			<Route exact path="/" component={App} />
			<Route path="/cv" component={CV} />
			<Route exact path="/ThePerlness" render={() => {window.location.href="/ThePerlness/game.html"}} />
		</Switch>
	</Router>
);

ReactDOM.render(routes, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();