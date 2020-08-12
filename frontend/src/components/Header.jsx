const React = require('react');
const { useState, useRef, memo } = React;
require('../app.scss');

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
                    <div className="profile-img">
                        <img src="https://scontent-ssn1-1.xx.fbcdn.net/v/t1.30497-1/cp0/c12.0.40.40a/p40x40/84241059_189132118950875_4138507100605120512_n.jpg?_nc_cat=1&_nc_sid=dbb9e7&_nc_ohc=t6hUtKTgbhYAX9TuhMD&_nc_ht=scontent-ssn1-1.xx&oh=898da66084a99fddfd5c6d8753b7f1e9&oe=5F58A49E" alt=""/>
                    </div>
                </div>
            </header>
        </>
    );
});

module.exports = Header;