const React = require('react');
const { useState, useRef, memo, useEffect } = React;
const axios = require('axios');
let data = JSON.stringify({"password":"1234"});
const producttags = memo((props) => {
    const [tagsdata, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        var config = {
            method: 'get',
            url: 'http://127.0.0.1:5000/product-tags',
            headers: { 
            'Content-Type': 'application/json'
            },
            data : data
        };
        setLoading(true);
        setData(null);
        axios(config)
        .then(function (response) {
            setData(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });
        setLoading(false);
    },[]);
    if(loading) return (<div>로딩중.</div>);
    if(!tagsdata) return (null);
    return (
        <ul className="product-type">
            {tagsdata.map((i)=>{
                if(i!=props.state){
                    if(i=="HOME"){
                        return <li className="product-home" onClick={()=> { props.callapi("HOME") }}>HOME<i className="fas fa-home"></i></li>
                    }
                    return <li onClick={()=> { props.callapi(i)}}>{i}</li>
                }
                else{
                    if(i=="HOME"){
                        return <li style={{background:"pink"}} className="product-home" onClick={()=> { props.callapi("HOME") }}>HOME<i className="fas fa-home"></i></li>
                    }
                    return <li style={{background: "pink"}} onClick={()=> { props.callapi(i)}}>{i}</li>
                }
            })}
        </ul>
    )
});

module.exports = producttags