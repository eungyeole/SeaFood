const React = require('react');
const { useState, useRef, memo } = React;
require('../src/app.scss');

const Productlist = memo( () => {

    return (
        <>
            <div className="product">
                <ul className="product-type">
                    <li className="product-home">HOME<i className="fas fa-home"></i></li>
                    <li>CRAB</li>
                    <li>FISH</li>
                    <li>SHRIMP</li>
                </ul>
                <div className="product-list">
                    <div className="product-title">HOME</div>
                    <div className="product-desc">설명</div>
                    <div className=""></div>
                </div>
            </div>
        </>
    );
});

module.exports = Productlist;