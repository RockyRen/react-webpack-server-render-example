var React = require('react'),
	ReactDOM = require('react-dom'),
	App = require('./App');

var APP_PROPS = window.APP_PROPS || {};

ReactDOM.render(
	<App initialCount={APP_PROPS.initialCount}/>,
	document.getElementById('root')
);