const React = require('react');
const { useState, useRef, memo } = React;
require('../app.scss');

const Productlist = memo( () => {

    return (
        <>
            <div className="product">
                <ul className="product-type">
                    <li className="product-home">HOME<i class="fas fa-home"></i></li>
                    <li>CRAB</li>
                    <li>FISH</li>
                    <li>SHRIMP</li>
                </ul>
                <div className="product-list">
                    <div className="product-title">HOME</div>
                    <div className="product-desc">설명</div>
                </div>
            </div>
        </>
    );
});

module.exports = Productlist;