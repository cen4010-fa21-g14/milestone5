import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import "./settings.css";
export default function Settings() {
    return (
        <div>
            <>
            <Topbar/>
            <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Distantly-Near</h3>
                    <span className="loginDesc">Closer than you think!</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} className="loginInput" type="email"/>
                        <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6"/>
                        <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password"/>
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">
                        <Link to="/login" style={{textDecoration: 'none', color:'white',display: 'block'}}>
                        Log into Account
                        </Link>
                            </button>                    </form>
                </div>
            </div>
        </div>
           </>
        </div>
    )
}