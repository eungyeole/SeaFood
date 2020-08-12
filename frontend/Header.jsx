const React = require('react');
const { useState, useRef, memo } = React;

const Header = memo( () => {

    return (
        <>
            <div className="test">안녕하세요</div>
        </>
    );
});

module.exports = Header;