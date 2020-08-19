const React = require('react');
const { useState, useRef, memo } = React;
require('../src/app.scoped.scss');
const Header = require('./Header');
const Slide = require('./Slide');
const Productlist = require('./productlist');

const { BrowserRouter } = require('react-router-dom')

const App = memo( () => {
    document.body.style.overflow = 'scrollbar'

    return (
        <BrowserRouter>
            <div className="bodyWrapperApp">
                <Header></Header>
                <section>
                    <Slide></Slide>
                    <Productlist></Productlist>
                </section>
            </div>
        </BrowserRouter>
    );
});

module.exports = App;