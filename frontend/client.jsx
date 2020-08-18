const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const App = require('./src/components/Routes');
const Hot = hot(App);

ReactDOM.render(<Hot />, document.querySelector('#root'));