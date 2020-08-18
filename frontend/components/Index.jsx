const React = require('react')
const { memo } = React

const App = require('./App')
const Login = require('./Login')

const { BrowserRouter, Route } = require('react-router-dom')

const Index = memo( () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={Login} />
        </BrowserRouter>
    )
});

module.exports = Index