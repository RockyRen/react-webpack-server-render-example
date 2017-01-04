var React = require('react'),
	ReactDOM = require('react-dom'),
	App = require('./App');

// var APP_PROPS = window.APP_PROPS || {};
var APP_PROPS = {
	initialCount: 10
}

// 前端也要渲染一份
ReactDOM.render(
	<App initialCount={APP_PROPS.initialCount}/>,
	document.getElementById('root')
);