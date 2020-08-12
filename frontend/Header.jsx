const React = require('react');
const { useState, useRef, memo } = React;
require('./src/app.scss');

const Header = memo( () => {

    return (
        <>
            <div className="test">안녕하세요</div>
        </>
    );
});

module.exports = Header;