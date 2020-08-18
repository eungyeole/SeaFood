const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const Index = require('./components/Index.jsx');
const Hot = hot(Index);

ReactDOM.render(<Hot />, document.querySelector('#root'));