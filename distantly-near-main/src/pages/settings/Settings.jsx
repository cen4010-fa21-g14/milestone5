import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import "./settings.css";
export default function Settings() {
    return (
        <div>
            <>
            <Topbar/>
            <div className="">
            <div className="">
                <div className="">
                    <h3 className="">Distantly-Near</h3>
                    <span className="">Closer than you think!</span>
                </div>
                <div className="">
                    <form className="" >
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="Email" required ref={email} className="loginInput" type="email"/>
                        <input placeholder="Password" required ref={password} className="loginInput" type="password" minLength="6"/>
                        <input placeholder="Password Again" required ref={passwordAgain} className="loginInput" type="password"/>
                        <button className="" type="submit">Sign Up</button>
                        <button className="">
                        
                            </button>                    </form>
                </div>
            </div>
        </div>
           </>
        </div>
    )
}