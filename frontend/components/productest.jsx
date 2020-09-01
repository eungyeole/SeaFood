const React = require('react');
const { useState, useRef, memo, useEffect } = React;
const axios = require('axios');
let data = JSON.stringify({"password":"1234"});
const Productcard = require('./productcard');
const Producttags = require('./producttags');
const Productest = memo( () => {
    const [state, setState] = useState("HOME");
    const [productdata, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const callapi=(stateapi)=>{
        var config = {
            method: 'get',
            url: `http://127.0.0.1:5000/product?tags=${stateapi}`,
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
            setState(stateapi);
        })
        .catch(function (error) {
            console.log(error);
        });
        setLoading(false);
    }
    useEffect(()=>{
        callapi(state);
    },[]);
    if(loading) return (<div>로딩중.</div>);
    if(!productdata) return (null);
    return (
        <>
            <div className="product-wrapper">
                <div className="product-title">{state}</div>
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
                    {productdata.map((i)=>{return <Productcard json={i}></Productcard>})}
                </ul>
            </div>
        </>
    );
});

module.exports = Productest;