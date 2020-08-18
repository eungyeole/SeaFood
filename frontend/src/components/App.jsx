const React = require('react');
const { useState, useRef, memo } = React;
require('../app.scss');
const Header = require('./Header');
const Slide = require('./Slide');
const Productlist = require('./productlist');
const Link = require('react-router-dom').Link;   

const App = memo( () => {

    return (
        <>
            <div>
                <Header></Header>
                <section>
                    <Slide></Slide>
                    <Productlist></Productlist>
                </section>
            </div>
        </>
    );
});

module.exports = App;