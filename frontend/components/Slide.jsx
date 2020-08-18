const React = require('react');
const { useState, useRef, memo } = React;
require('../app.scss');


const Slide = memo( () => {
    Next=()=>{
        let last=document.getElementsByClassName("slide").length;
        for(let i=0;i<last;i++)
        {
            if(document.getElementsByClassName("slide")[i].style.display=='block'){
                document.getElementsByClassName("slide")[i].style.display='none';
                if(i+1>last-1)
                {
                    document.getElementsByClassName("slide")[0].style.display='block';
                }
                else{
                    document.getElementsByClassName("slide")[i+1].style.display='block';
                }
                break;
            }
        }
    }
    return (
        <>
            <div className="slide-wrapper">
                <div style={{display:'block'}} className="slide">
                    <div className="yellow"></div>
                </div>
                <div className="slide">
                    <div className="blue"></div>
                </div>
                <div className="slide">
                    <div className="red"></div>
                </div>
                <div className="slide">
                    <div className="orange"></div>
                </div>
                <div className="slide"></div>
                <button className="next" onClick={Next}></button>
            </div>
        </>
    );
});

module.exports = Slide;