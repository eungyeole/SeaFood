const React = require('react')
const { useState, useRef, memo, useEffect } = React;
const { BrowserRouter} = require('react-router-dom');
const axios = require('axios');
let data = JSON.stringify({"password":"1234"});
function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
const productpage = memo(() => {
    let id = getParameter("id");
    const [count, setCount] = useState(1);
    const [productdata, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    if(count<=0) setCount(1);
    const callapi=(id)=>{
        var config = {
            method: 'get',
            url: `http://127.0.0.1:5000/search?id=${id}`,
            headers: { 
            'Content-Type': 'application/json'
            },
            data : data
        }; 
        setLoading(true);
        setData(null);
        axios(config)
        .then(function (response) {
            setData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
        setLoading(false);
    }
    useEffect(()=>{
        callapi(id);
    },[]);
    if(loading) return (<div>로딩중.</div>);
    if(!productdata) return (null);
    return (
        <BrowserRouter>
            <div className="page-wrapper">
                <div className="page-image">
                </div>
                <div className="page-contents">
                    <div>
                        <div className="page-top">
                            <div className="page-tags">{productdata[0][5]}</div>
                            <div className="page-pdnum">ID : {productdata[0][0]}</div>
                        </div>
                        <div className="page-item">
                            <div> 
                                <div className="page-title">{productdata[0][1]}</div>
                                <div className="page-price"><strong>{String(productdata[0][2]).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</strong>원</div>
                            </div>
                            <div className="page-itembtbox">
                                <div className="page-itembt"><i className="far fa-heart" aria-hidden="true"></i></div>
                                <div className="page-itembt"><i className="fas fa-share-alt"></i></div>
                            </div>
                        </div>
                        <div className="page-charge">배송비 {String(productdata[0][6]).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
                        <div className="page-country">원산지-국내산</div>
                    </div>
                    <div className="page-bottom">
                        <div className="page-count">
                            <div className="count-title">수량</div>
                            <div className="count-bottom">
                                <div className="count-box">
                                    <div className="countbt1" onClick={()=>setCount(count-1)}>-</div>
                                    <input type="text" value={count} readOnly/>
                                    <div className="countbt2" onClick={()=>setCount(count+1)}>+</div>
                                </div>
                                <div className="price-amount">{String(productdata[0][2]*count).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                            </div>
                        </div>
                        <div className="page-btbox">
                            <div className="page-button">구매하기</div>
                            <div className="page-button">장바구니</div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
});

module.exports = productpage