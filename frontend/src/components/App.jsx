const React = require('react');
const { useState, useRef, memo } = React;
require('../app.scss');
const Header = require('./Header');
const Slide = require('./Slide');

const App = memo( () => {

    return (
        <>
            <div>
                <Header></Header>
                <Slide></Slide>
            </div>
        </>
    );
});

module.exports = App;