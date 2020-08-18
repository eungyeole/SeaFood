const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

<<<<<<< HEAD
const Index = require('./components/Index.jsx');
const Hot = hot(Index);
=======
const App = require('./src/components/Routes');
const Hot = hot(App);
>>>>>>> c05d389ccd821593a446e9bebfdb23596de29668

ReactDOM.render(<Hot />, document.querySelector('#root'));