const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Header = require('./Header');

const Hot = hot(Header);

ReactDOM.render(<Hot />, document.querySelector('#root'));