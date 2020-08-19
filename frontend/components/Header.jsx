const React = require('react');
const { useState, useRef, memo } = React;
require('../src/app.scss');
const { Motion, spring } = require('react-motion');

const Header = memo( () => {

    const [width, setWidth] = useState(550);

    const animate = () => {
        setWidth( width === 600 ? 550 : 600);
    };

    const motionSpringSetting = { stiffness: 105, daping: 40, precision: 30};
    const motionSpringSetting2 = { stiffness: 1005, daping: 40, precision: 30};

    return (
        <>
            <header>
                <div className="logo">
                   SeaFood
                </div>
                <Motion style={{ width: spring(width, motionSpringSetting) }}>
                {
                    ({ width }) => <div style={{ width }} className="search">
                        <Motion style={{ width: spring(width-20, motionSpringSetting2) }}>
                        {
                            ({ width }) => <input style={{ width }} onFocus={ animate } onBlur={ animate } type="text" placeholder="검색어를 입력"/>
                        }
                        </Motion>
                        <i className="fas fa-search"></i>
                    </div>
                }
                </Motion>
                <ul className="header-menu">
                    <li><i className="far fa-heart"></i></li>
                    <li><span>안은결님</span></li>
                    <li><span className="logout">로그아웃</span></li>
                </ul>
            </header>
        </>
    );
});

module.exports = Header;