const React = require('react')
const { memo } = React

const App = require('./App')
const Login = require('./Login')

const { BrowserRouter } = require('react-router-dom')

const productpage = memo( () => {
    return (
        <BrowserRouter>
            <div></div>
        </BrowserRouter>
    )
});

module.exports = productpage