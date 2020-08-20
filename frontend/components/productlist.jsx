const React = require('react');
const { useState, useRef, memo, useEffect } = React;
const axios = require('axios');
const Productlist = memo( () => {
    const [state, setState] = useState("home");
    return (
        <>
            <div className="product">
                <ul className="product-type">
                    <li className="product-home" onClick={()=> setState(event.target.innerText)}>HOME<i className="fas fa-home"></i></li>
                    <li>FISH</li>
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
                        <li>
                            <div className="image-box">
                                <img src="https://us.123rf.com/450wm/bestfotostudio/bestfotostudio1509/bestfotostudio150900150/45464411-타이거-새우-흰색-배경에-격리-된-새우-해물.jpg?ver=6" alt=""/>
                            </div>
                            <div className="information-box">
                                <div className="price-box">
                                    <span className="product-price">54,900</span>
                                    <span className="product-unit">원</span>
                                </div>
                                <div className="product-name">45464411-타이거-새우</div>
                                <span className="product-tag">구매 694</span>
                            </div>
                            <div className="button-box">
                                <div className="product-button"><i class="far fa-credit-card"></i> 구매하기</div>
                                <div className="product-button cok"><i class="fas fa-shopping-cart"></i></div>
                            </div>
                        </li>
                        <li>
                            <div className="image-box">
                                <img src="https://us.123rf.com/450wm/bestfotostudio/bestfotostudio1509/bestfotostudio150900150/45464411-타이거-새우-흰색-배경에-격리-된-새우-해물.jpg?ver=6" alt=""/>
                            </div>
                            <div className="information-box">
                                <div className="price-box">
                                    <span className="product-price">54,900</span>
                                    <span className="product-unit">원</span>
                                </div>
                                <div className="product-name">45464411-타이거-새우</div>
                                <span className="product-tag">구매 694</span>
                            </div>
                            <div className="button-box">
                                <div className="product-button"><i class="far fa-credit-card"></i> 구매하기</div>
                                <div className="product-button cok"><i class="fas fa-shopping-cart"></i></div>
                            </div>
                        </li>
                        <li>
                            <div className="image-box">
                                <img src="https://us.123rf.com/450wm/bestfotostudio/bestfotostudio1509/bestfotostudio150900150/45464411-타이거-새우-흰색-배경에-격리-된-새우-해물.jpg?ver=6" alt=""/>
                            </div>
                            <div className="information-box">
                                <div className="price-box">
                                    <span className="product-price">54,900</span>
                                    <span className="product-unit">원</span>
                                </div>
                                <div className="product-name">45464411-타이거-새우</div>
                                <span className="product-tag">구매 694</span>
                            </div>
                            <div className="button-box">
                                <div className="product-button"><i class="far fa-credit-card"></i> 구매하기</div>
                                <div className="product-button cok"><i class="fas fa-shopping-cart"></i></div>
                            </div>
                        </li>
                        <li>
                            <div className="image-box">
                                <img src="https://us.123rf.com/450wm/bestfotostudio/bestfotostudio1509/bestfotostudio150900150/45464411-타이거-새우-흰색-배경에-격리-된-새우-해물.jpg?ver=6" alt=""/>
                            </div>
                            <div className="information-box">
                                <div className="price-box">
                                    <span className="product-price">54,900</span>
                                    <span className="product-unit">원</span>
                                </div>
                                <div className="product-name">45464411-타이거-새우</div>
                                <span className="product-tag">구매 694</span>
                            </div>
                            <div className="button-box">
                                <div className="product-button"><i class="far fa-credit-card"></i> 구매하기</div>
                                <div className="product-button cok"><i class="fas fa-shopping-cart"></i></div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    );
});

module.exports = Productlist;