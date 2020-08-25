const React = require('react');
const { useState, useRef, memo } = React;
const productcard = memo((props) => {
    function page(){
        location.href="/page?id="+props.pid;
    }
    return (
        <li>
            <div className="image-box">
                <img src={props.img} alt=""/>
            </div>
            <div className="information-box">
                <div className="price-box">
                    <span className="product-price">{String(props.price).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                    <span className="product-unit">원</span>
                </div>
                <div className="product-name">{props.name}</div>
                <span className="product-tag">구매 {String(props.times).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
            </div>
            <div className="button-box">
                <div className="product-button" onClick={page}><i className="far fa-credit-card"></i> 구매하기</div>
                <div className="product-button cok"><i className="fas fa-shopping-cart"></i></div>
            </div>
        </li>
    )
});

module.exports = productcard