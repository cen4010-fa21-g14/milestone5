import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import "./settings.css";
export default function Settings() {
    return (
        <div>
            <>
            <Topbar/>
            <div>
                    <h4 className="dummyTitle">Edit your profile informationa and then submit it by clicking the button below!</h4>
            </div>
            <div className="settings">

            <div className="settingsWrapper">
                
                <div className="">
                    <form className="SettingsBox" >
                        <input placeholder="First Name" className="loginInput" />
                        <input placeholder="Email" className="loginInput" type="email"/>
                        <input placeholder="Password" className="loginInput" type="password" minLength="6"/>
                        <input placeholder="Password Again"  className="loginInput" type="password"/>
                        <button className="button">Submit</button>                    
                        </form>
                </div>
            </div>
        </div>
           </>
        </div>
    )
}