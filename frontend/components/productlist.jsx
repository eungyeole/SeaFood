const React = require('react');
const { useState, useRef, memo, useEffect } = React;
const axios = require('axios');
let data = JSON.stringify({"password":"1234"});
const Productcard = require('./productcard');
const Producttags = require('./producttags');
const Productest= require('./productest');
const Productlist = memo( () => {
    const [state, setState] = useState("HOME");
    return (
        <>
            <div className="product">
                <Producttags state={state} setState={setState}></Producttags>
                <Productest></Productest>
            </div>
        </>
    );
});

module.exports = Productlist;