const React = require('react')
const { useState, memo } = React
const { BrowserRouter } = require('react-router-dom')
const { Motion, spring } = require('react-motion');

require('../src/login.scoped.scss')

const Login = memo( () => {
    const [id, setId] = useState('')
    const [password, setPassword] = useState('')
    const [position, setPosition] = useState(120)
    
    const MotionOption = { stiffness: 40, daping: 25, precision: 0 }

    document.body.style.overflow = 'hidden'

    const onClickLogin = () => {
        if(id==='') {
            document.querySelector('#BoxId').style.borderBottom = '2px solid red';
        }
        else if(password==='') {
            document.querySelector('#BoxPs').style.borderBottom = '2px solid red';
        }
        else {
            setId('')
            setPassword('')
        }
    }

    const onClickSignup = () => {
        if(position === 120) {
            setPosition(2000)
            document.getElementById('b2').style.display = 'flex'
            setTimeout(() => {
                document.getElementById('b1').style.display = 'none'
            }, 2000)
        }
        else {
            setPosition(120)
            document.getElementById('b1').style.display = 'flex'
            setTimeout(() => {
                document.getElementById('b2').style.display = 'none'
            }, 2000)
            document.querySelector('#BoxPs').style.borderBottom = '2px solid #8f8f8f';
            document.querySelector('#BoxId').style.borderBottom = '2px solid #8f8f8f';
        }
    }

    const onChangePassword = (e) => {
        if(e.target.value==='') {
            document.querySelector('#BoxPs').style.borderBottom = '2px solid red';
        }
        else {
            document.querySelector('#BoxPs').style.borderBottom = '2px solid #8f8f8f';
        }
        setPassword(e.target.value)
    }

    const onChangeId = (e) => {
        if(e.target.value==='') {
            document.querySelector('#BoxId').style.borderBottom = '2px solid red';
        }
        else {
            document.querySelector('#BoxId').style.borderBottom = '2px solid #8f8f8f';
        }
        setId(e.target.value)
    }

    return (
        <BrowserRouter>
            <div className="background">
            </div>
            <Motion defaultStyle={{left: 2000}} style={{left: spring(position, MotionOption)}}>
            {
                (style) => (<div style={style} id="b1" className="bodyWrapper">
                    <div className="loginWrapper">
                        <div className="loginTitle">
                            <a href="/">홈으로</a>
                        </div>
                        <div className="loginBodyWrapper">
                            <div className="loginBody">
                                <p className="pTitle">로그인</p>
                                <div className="loginBodyInner"> 
                                    <div>
                                        <p className="pName">아이디</p>
                                        <input value={id} id="BoxId" className="loginBodyBox" type="text" onChange={onChangeId} />
                                    </div>
                                    <div>
                                        <p className="pName">비밀번호</p>
                                        <input value={password} id="BoxPs" className="loginBodyBox" type="password" onChange={onChangePassword} />
                                    </div>
                                    <button onClick={onClickLogin} className="loginBodyButton">Login</button>
                                </div>
                                <p className="gotoSignup">
                                    아직 아이디가 없으십니까?
                                    <a onClick={onClickSignup}>회원가입</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className="bodyImg" src="../assets/login.PNG" />
                </div>)
            }
            </Motion>
            <Motion style={{left: spring(position === 2000 ? 120 : 2000, MotionOption)}}>
            {
                (style) => (
                <div style={style} id="b2" className="bodyWrapper1">
                    <div className="loginWrapper">
                        <div className="loginTitle">
                            <a href="/">홈으로</a>
                        </div>
                        <div className="loginBodyWrapper">
                            <div className="loginBody">
                                <p className="pTitle1">회원가입</p>
                                <div className="loginBodyInner1"> 
                                    <div>
                                        <p className="pName">아이디</p>
                                        <input value={id} id="BoxId" className="loginBodyBox" type="text" onChange={onChangeId} />
                                    </div>
                                    <div>
                                        <p className="pName">비밀번호</p>
                                        <input value={password} id="BoxPs" className="loginBodyBox" type="password" onChange={onChangePassword} />
                                    </div>
                                    <div>
                                        <p className="pName">비밀번호 확인</p>
                                        <input value={password} id="BoxPs" className="loginBodyBox" type="password" onChange={onChangePassword} />
                                    </div>
                                    <button className="loginBodyButton">Sign Up</button>
                                </div>
                                <p className="gotoSignup">
                                    아이디가 있으십니까?
                                    <a onClick={onClickSignup}>로그인</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <img className="bodyImg" src="../assets/login.PNG" />
                </div>
                )
            }
            </Motion>
        </BrowserRouter>
    )
})

module.exports = Login