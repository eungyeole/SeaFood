const React = require('react');
const { useState, useRef, memo } = React;
require('../app.scss');
const { Motion, spring } = require('react-motion');

const Header = memo( () => {

    const [width, setWidth] = useState(450);

    const animate = () => {
        setWidth( width === 500 ? 450 : 500);
    };

    const motionSpringSetting = { stiffness: 105, daping: 40, precision: 30};
    const motionSpringSetting2 = { stiffness: 1005, daping: 40, precision: 30};

    return (
        <>
            <header>
                <div className="logo">
                   adadad
                </div>
                <Motion style={{ width: spring(width, motionSpringSetting) }}>
                {
                    ({ width }) => <div style={{ width }} className="search">
                        <Motion style={{ width: spring(width-20, motionSpringSetting2) }}>
                        {
                            ({ width }) => <input style={{ width }} onFocus={ animate } onBlur={ animate } type="text" placeholder="검색어를 입력"/>
                        }
                        </Motion>
                    </div>
                }
                </Motion>
                <div>
                    <div className="profile-img">
                        <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=t6hUtKTgbhYAX9TuhMD&_nc_ht=scontent-ssn1-1.xx&oh=898da66084a99fddfd5c6d8753b7f1e9&oe=5F58A49E" alt=""/>
                    </div>
                </div>
            </header>
        </>
    );
});

module.exports = Header;