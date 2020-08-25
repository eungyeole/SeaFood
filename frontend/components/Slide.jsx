const React = require('react');
const { Motion, spring } = require('react-motion');
const { useState, useRef, memo } = React;
const Slide = memo( () => {
    const [state, setState] = useState(0)

    const motionOption = { stiffness: 60, daping: 20, precision: 0 }

    const Next=()=>{
        switch(state) {
            case 0:
                setState(1)
                break
            case 1:
                setState(2)
                break
            case 2:
                setState(3)
                break
            case 3:
                setState(4)
                break
            case 4:
                setState(0)
                break
        }
        clearTimeout(time)
    }
    const Prev=()=>{
        switch(state) {
            case 0:
                setState(4)
                break
            case 1:
                setState(0)
                break
            case 2:
                setState(1)
                break
            case 3:
                setState(2)
                break
            case 4:
                setState(3)
                break
        }
        clearTimeout(time)
    }

    let time = setTimeout(() => {
        Next();
    }, 6000);

    return (
        <>
            <div className="slide-wrapper">
                <div className="slide">
                <Motion style={{opacity: spring(state === 0 ? 1 : 0, motionOption)}}>
                {
                    ({opacity}) => (
                        <div style={{opacity}} className="yellow"></div>
                    )
                }
                </Motion>
                <Motion style={{opacity: spring(state === 1 ? 1 : 0, motionOption)}}>
                {
                    ({opacity}) => (
                        <div style={{opacity}} className="red"></div>
                    )
                }
                </Motion>
                <Motion style={{opacity: spring(state === 2 ? 1 : 0, motionOption)}}>
                {
                    ({opacity}) => (
                        <div style={{opacity}} className="green"></div>
                    )
                }
                </Motion>
                <Motion style={{opacity: spring(state === 3 ? 1 : 0, motionOption)}}>
                {
                    ({opacity}) => (
                        <div style={{opacity}} className="blue"></div>
                    )
                }
                </Motion>
                <Motion style={{opacity: spring(state === 4 ? 1 : 0, motionOption)}}>
                {
                    ({opacity}) => (
                        <div style={{opacity}} className="orange"></div>
                    )
                }
                </Motion>
                </div>
                <button className="prev" onClick={Prev}><i className="fas fa-chevron-left"></i></button>
                <button className="next" onClick={Next}><i className="fas fa-chevron-right"></i></button>
                
            </div>
        </>
    );
});

module.exports = Slide;