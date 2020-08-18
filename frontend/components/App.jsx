const React = require('react');
const { useState, useRef, memo } = React;
require('../app.scss');
const Header = require('./Header');
const Slide = require('./Slide');
const Productlist = require('./productlist');

const { BrowserRouter } = require('react-router-dom')

const App = memo( () => {

    return (
        <BrowserRouter>
            <Header></Header>
            <section>
                <Slide></Slide>
                <Productlist></Productlist>
            </section>
        </BrowserRouter>
    );
});

module.exports = App;