import React from 'react'
import Topbar from "../../components/topbar/Topbar";
import "./settings.css";
export default function Settings() {
    return (
        <div>
            <>
            <Topbar/>
            <div>
                    <h4 className="dummyTitle">Edit your profile information and then submit it by clicking the button below!</h4>
            </div>
            <div className="settings">

            <div className="">
                
                <div className="">
                    <form className="SettingsBox" >
                        <input placeholder="First Name" className="" />
                        <input placeholder="Last Name" className=""/>
                        <input placeholder="City" className=""/>
                        <input placeholder="From" className=""/>
                        <input placeholder="Username" className=""/>
                        <input placeholder="Email" className="" type="email"/>
                        <input placeholder="Password" className="" type="password" minLength="6"/>
                        <input placeholder="Password Again"  className="" type="password"/>
                        
                        <button className="button">Submit</button>                    
                        </form>
                </div>
            </div>
        </div>
           </>
        </div>
    )
}