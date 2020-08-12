const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const App = require('./src/components/App');
const Hot = hot(App);

ReactDOM.render(<Hot></Hot>, document.querySelector('#root'));