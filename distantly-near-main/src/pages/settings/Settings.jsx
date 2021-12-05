import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import "./settings.css";
export default function Settings() {
    return (
        <div>
            <>
            <Topbar/>
            <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsLeft">
                    <h3 className="settingsLogo">Distantly-Near</h3>
                    <span className="settingsDesc">Closer than you think!</span>
                </div>
                <div className="SettingsRight">
                    <form className="SettingsBox" >
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" type="email"/>
                        <input placeholder="Password" className="loginInput" type="password" minLength="6"/>
                        <input placeholder="Password Again"  className="loginInput" type="password"/>
                        <button className="button"></button>                    
                        </form>
                </div>
            </div>
        </div>
           </>
        </div>
    )
}