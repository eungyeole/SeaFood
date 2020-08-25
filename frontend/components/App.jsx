const React = require('react');
const { useState, useRef, memo } = React;
require('../src/app.scoped.scss');
const Header = require('./Header');
const Slide = require('./Slide');
const Productlist = require('./productlist');
const Productpage = require('./productpage');
const { BrowserRouter, Route } = require('react-router-dom')

const App = memo( () => {
    document.body.style.overflow = 'scrollbar'

    return (
        <BrowserRouter>
            <div className="bodyWrapperApp">
                <Header></Header>
                <Route exact path="/">
                    <section>
                        <Slide></Slide>
                        <Productlist></Productlist>
                    </section>
                </Route>
                <Route path="/page">
                    <Productpage></Productpage>
                </Route>
            </div>
        </BrowserRouter>
    );
});

module.exports = App;