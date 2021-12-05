import React from 'react'
import { useRef } from "react";
import { axiosInstance } from "../../config";
import { useHistory } from "react-router"
import { useEffect,useState } from "react"
import Topbar from "../../components/topbar/Topbar";
import "./settings.css";
import { useParams } from "react-router";



export default function Settings() {
    const userId = useRef();

    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const city = useRef();
    const from = useRef();
    const firstName = useRef();
    const lastName = useRef();
    const history = useHistory();

    const [ user, setUser] = useState({});
    const userParams = useParams()._id;

    useEffect(()=>{
        const fetchUsers = async () =>{
            const res = await axiosInstance.get("users/"+ userParams );
            setUser(res.data);
        }
        fetchUsers();

    },[userParams]);

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords do not match!  ")
        } else{
            const userItems = {
                userId: userParams,
                email: email.current.value,
                password: password.current.value,
                city: city.current.value,
                from: from.current.value,
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                
            }
            try{
                await axiosInstance.put("/users/" + userParams, userItems);
                history.push("/login")
            }catch(err){
                console.log(err)
            }
        }
      };
    
    return (
        
            <>
            <Topbar/>
            <div>
                    <h4 className="dummyTitle"></h4>
            </div>
            <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsLeft">
          <h3 className="settingsLogo"></h3>
          <span className="settingsDesc">
          Edit your profile information and then submit it by clicking the button below!
          </span>
        </div>
        <div className="settingsRight">
        <form className="settingsBox" onSubmit={handleClick}>
                        {/* <input placeholder="User Id"  required ref={userId} className="" /> */}
                        <input placeholder="First Name"  required ref={firstName} className="" />
                        <input placeholder="Last Name"  required ref={lastName} className=""/>
                        <input placeholder="City"  required ref={city} className=""/>
                        <input placeholder="State" required ref={from} className=""/>
                        <input placeholder="Email"  required ref={email}className="" type="email"/>
                        <input placeholder="Password" required ref={password} className="" type="password" minLength="6"/>
                        <input placeholder="Password Again"  required ref={passwordAgain} className="" type="password"/>
                        <br></br>
                        <br></br>
                        <br></br>
                        <button className="button">Submit</button>                    
                        </form>
        </div>
      </div>
    </div>
        
           </>
        
    )
}

