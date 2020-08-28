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
            <div className="page-wrapper">
                <div className="page-image">

                </div>
                <div className="page-contents">
                    <div>
                        <div className="page-top">
                            <div className="page-tags">CRAB</div>
                            <div className="page-pdnum">ID : 3</div>
                        </div>
                        <div className="page-item">
                            <div> 
                                <div className="page-title">새우가 너무조하요</div>
                                <div className="page-price"><strong>19,610</strong>원</div>
                            </div>
                            <div className="page-itembtbox">
                                <div className="page-itembt"><i class="far fa-heart" aria-hidden="true"></i></div>
                                <div className="page-itembt"><i class="fas fa-share-alt"></i></div>
                            </div>
                        </div>
                        <div className="page-charge">배송비 2,500원</div>
                        <div className="page-country">원산지-국내산</div>
                    </div>
                    <div className="page-bottom">
                        <div className="page-count">
                            <div className="count-title">수량</div>
                            <div className="count-bottom">
                                <div className="count-box">
                                    <div className="countbt1">-</div>
                                    <input type="text" value="1"/>
                                    <div className="countbt2">+</div>
                                </div>
                                <div className="price-amount">19,610원</div>
                            </div>
                        </div>
                        <div className="page-btbox">
                            <div className="page-button">구매하기</div>
                            <div className="page-button">장바구니</div>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
});

module.exports = productpage