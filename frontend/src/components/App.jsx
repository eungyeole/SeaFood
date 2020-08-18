const React = require('react');
const { useState, useRef, memo } = React;
require('../app.scss');
const Header = require('./Header');
const Slide = require('./Slide');
const Productlist = require('./productlist');
<<<<<<< HEAD
const { BrowserRouter } = require('react-router-dom') 
=======
const Link = require('react-router-dom').Link;   
>>>>>>> c05d389ccd821593a446e9bebfdb23596de29668

const App = memo( () => {

    return (
        <BrowserRouter>
            <div>
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