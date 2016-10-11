const React = require('react');

//export new react class:
module.exports = React.createClass({
//each needs a render mthd and 
//render mthd can return only one element, so they need to be wrapped into one.
	render: function(){
		return(
			<section>
			<h1>Messages</h1>
		</section>
		);
	}
});

