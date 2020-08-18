const React = require('react');
const BrowserRouter = require('react-router-dom').BrowserRouter;
const Route = require('react-router-dom').Route;
const Router = require('react-router-dom').Router;
const Switch = require('react-router-dom').Switch;
const { useState, useRef, memo } = React;
require('../app.scss');
const App = require('./App');
const Header = require('./Header');
const Routers = memo( () => {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/src" component={App} />
                    <Route path="/header" component={Header} />
                </Switch>
            </BrowserRouter>
        </>
    );
});

module.exports = Routers;