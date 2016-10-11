//global nav lives here
const React = require('react');
const { Link } = require('react-router');

module.exports = React.createClass({
	render: function() {
		return(
			<section>
				<nav>
					{/*basic nav*/}
					<Link to="/">Home</Link>
					<Link to="/edit-profile">Edit Profile</Link>
					<Link to="/connections">Connections</Link>
					<Link to="/messages">Messages</Link>
					{/*regular anchor tags becasue they'll actually make
					a new http request. <Link> does not*/}
					<a href="/auth/register">Register</a>
					<a href="/auth/login">Login</a>
				</nav>
				{/*where our uniq pg content lives. inject this.props.children 
				{}s let me inj js expressions in jsx markup*/}
				{this.props.children}
				{/*app comp is a skeleton comp. has all the shared content that appears on every pg.
				uniq content for each pg have their own compenents that will get placed where this.props.children appears*/}
			</section>
		);
	}

});