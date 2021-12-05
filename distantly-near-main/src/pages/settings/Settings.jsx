import React from 'react'
import { useRef } from "react";
import { axiosInstance } from "../../config";
import { useHistory } from "react-router"
import { useEffect,useState,useContext } from "react"
import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router";
import Topbar from "../../components/topbar/Topbar";
import "./settings.css";
export default function Settings() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const city = useRef();
    const from = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const history = useHistory();

    
    const userId = useParams()._id;
    const [ userIdtag, setUser] = useState({});
    useEffect(() =>{
        const fetchUser = async () =>{
            const res = await axiosInstance.get(`/users?userId=${userId}`);
            setUser(res.data);

        }
        fetchUser();
    });

    

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords do not match!  ")
        } else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                city: city.current.value,
                from: from.current.value,
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                
            }
            try{
                await axiosInstance.put(`/users/${userIdtag}`);
                history.push("/login")
            }catch(err){
                console.log(err)
            }
        }
      };
    
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
                        <input placeholder="First Name"  ref={firstName} className="" />
                        <input placeholder="Last Name"  ref={lastName} className=""/>
                        <input placeholder="City"  ref={city} className=""/>
                        <input placeholder="From"  ref={from} className=""/>
                        <input placeholder="Username"  ref={username} className=""/>
                        <input placeholder="Email"  ref={email}className="" type="email"/>
                        <input placeholder="Password"  ref={password} className="" type="password" minLength="6"/>
                        <input placeholder="Password Again"  ref={passwordAgain} className="" type="password"/>
                        
                        <button className="button">Submit</button>                    
                        </form>
                </div>
            </div>
        </div>
           </>
        </div>
    )
}