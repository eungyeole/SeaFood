const React = require('react');
const { Motion, spring } = require('react-motion');
const { useState, useRef, memo } = React;
require('../src/app.scss');
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
    Prev=()=>{
        let last=document.getElementsByClassName("slide").length;
        for(let i=0;i<last;i++)
        {
            if(document.getElementsByClassName("slide")[i].style.display=='block'){
                document.getElementsByClassName("slide")[i].style.display='none';
                if(i-1==-1)
                {
                    document.getElementsByClassName("slide")[last-1].style.display='block';
                }
                else{
                    document.getElementsByClassName("slide")[i-1].style.display='block';
                }
                break;
            }
        }
    }
    const Timer=setInterval(()=>{
        Next();
    },5000);
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
                <button className="prev" onClick={Prev}><i className="fas fa-chevron-left"></i></button>
                <button className="next" onClick={Next}><i className="fas fa-chevron-right"></i></button>
            </div>
        </>
    );
});

module.exports = Slide;