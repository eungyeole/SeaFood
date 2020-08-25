const React = require('react')
const { memo } = React
const { BrowserRouter} = require('react-router-dom')

function getParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
const productpage = memo(() => {
    let id = getParameter("id");
    return (
        <BrowserRouter>
            {id}
            
        </BrowserRouter>
    )
});

module.exports = productpage