import React from "react";
import { observer } from "mobx-react";
import { withRouter } from 'react-router-dom';
import { getNormalTime } from '../../stores/store.js';
import './Navbar.css';

@observer
class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
      <nav id="navbar" className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
					<a id="navbar-logo" className="icon" href="/">
					</a>
					<div id="navbar-search" className="containter">
						<input placeholder="search classes / teachers"></input>
					</div>
					<div className="navbar-burger" id="navbar-burger">
						<div className="navbar-item menuitem">
							<p className="navbar-item"><i className="fa fa-navicon"></i></p>
						</div>
					</div>
        </div>
        <div className="navbar-menu" aria-label="main navigation">

        </div>
      </nav>
		);
	}
}

export default withRouter(Navbar);
