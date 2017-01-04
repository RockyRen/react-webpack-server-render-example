var React = require('react');
var ReactDOMServer = require("react-dom/server");

var App = require('../app/App');

var ReactDOM = require('react-dom');


module.exports = function(props) {
	
	var content = ReactDOMServer.renderToString(
		<App initialCount={props.initialCount}></App>
	);

	var propsScript = 'var APP_PROPS = ' + JSON.stringify(props);

	var html = ReactDOMServer.renderToStaticMarkup(
		<html>
			<head>
			</head>
			<body>
				<div id="root" dangerouslySetInnerHTML={
					{__html: content}
				} />
				<script dangerouslySetInnerHTML={
					{__html: propsScript}
				}></script>
				<script src={"assets/entry.generator.js"}></script>
			</body>
		</html>
	);

	return html;
}