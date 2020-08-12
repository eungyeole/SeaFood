const React = require('react');
const { useState, useRef, memo } = React;
require('./src/app.scss');

const Header = memo( () => {

    return (
        <>
            <header>
                <div className="logo">
                   adadad
                </div>
                <div className="search">
                    <input type="text" placeholder="검색어를 입력"/>
                </div>
                <div>

                </div>
            </header>
        </>
    );
});

module.exports = Header;