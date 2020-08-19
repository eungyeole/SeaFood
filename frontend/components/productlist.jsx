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
                <div className="product-wrapper">
                    <div className="product-title">HOME</div>
                    <div className="product-desc">설명</div>
                    <div className="product-menu">
                        <ul className="product-align">
                            <li><i className="fas fa-sort-amount-down"></i>Sort</li>
                            <li>HOT</li>
                            <li>Cumulative</li>
                            <li>Lowest</li>
                            <li>Highest</li>
                        </ul>
                        <div className="product-details"><i className="fas fa-caret-down"></i></div>
                    </div>
                    <ul className="product-list">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        </>
    );
});

module.exports = Productlist;