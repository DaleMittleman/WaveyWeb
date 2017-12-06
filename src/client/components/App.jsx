import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Router>
	      <div id="app">
					<div id="bump"></div>
					<Navbar />
					<Footer />
	      </div>
			</Router>
		);
	}
}
