const React = require('react');
<<<<<<< Updated upstream
const { useState, useRef, memo } = React;
require('../app.scss');

const Slide = memo( () => {

    return (
        <>
            <div className="slide">
                
=======
const { Motion, spring } = require('react-motion');
const { useState, useRef, memo } = require('react');
const Slide = memo( () => {
    const [state, setState] = useState(0)

    const motionOption = { stiffness: 60, daping: 10, precision: 0 }

    const Next=()=>{
        if(state === 0) {
            setState(1)
        }
        else if(state === 1) {
            setState(2)
        }
        else if(state === 2) {
            setState(3)
        }
        else if(state === 3) {
            setState(4)
        }
        else if(state === 4) {
            setState(0)
        }
    }
    const Prev=()=>{
        if(state === 0) {
            setState(4)
        }
        else if(state === 1) {
            setState(0)
        }
        else if(state === 2) {
            setState(1)
        }
        else if(state === 3) {
            setState(2)
        }
        else if(state === 4) {
            setState(3)
        }
    }
    const Timer = setInterval(() => {
        Next();
    }, 6000);
    return (
        <>
            <div className="slide-wrapper">
                <div className="slide">
                    <Motion style={{opacity: spring(state === 0 ? 1 : 0, motionOption)}}>
                    {
                        ({opacity}) => (
                            <div style={{opacity}} className="red">
                            </div>
                        )
                    }
                    </Motion>
                    <Motion style={{opacity: spring(state === 1 ? 1 : 0, motionOption)}}>
                    {
                        ({opacity}) => (
                            <div style={{opacity}} className="orange">
                            </div>
                        )
                    }
                    </Motion>
                    <Motion style={{opacity: spring(state === 2 ? 1 : 0, motionOption)}}>
                    {
                        ({opacity}) => (
                            <div style={{opacity}} className="green">
                            </div>
                        )
                    }
                    </Motion>
                    <Motion style={{opacity: spring(state === 3 ? 1 : 0, motionOption)}}>
                    {
                        ({opacity}) => (
                            <div style={{opacity}} className="blue">
                            </div>
                        )
                    }
                    </Motion>
                    <Motion style={{opacity: spring(state === 4 ? 1 : 0, motionOption)}}>
                    {
                        ({opacity}) => (
                            <div style={{opacity}} className="yellow">
                            </div>
                        )
                    }
                    </Motion>
                </div>
                <button className="prev" onClick={Prev}><i className="fas fa-chevron-left"></i></button>
                <button className="next" onClick={Next}><i className="fas fa-chevron-right"></i></button>
>>>>>>> Stashed changes
            </div>
        </>
    );
});

module.exports = Slide;