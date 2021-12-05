import "./register.css"
import { useRef } from "react";
import { axiosInstance } from "../../config";
// import axios from "axios";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

export default function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();
    const firstName = useRef();
    const lastName = useRef();
    const city = useRef();
    const from = useRef();

    const handleClick = async (e) => {
        e.preventDefault();
        if(passwordAgain.current.value !== password.current.value){
            password.current.setCustomValidity("Passwords do not match!")
        } else{
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
                firstName: firstName.current.value,
                lastName: lastName.current.value,
                city: city.current.value,
                from: from.current.value
                
            }
            try{
                await axiosInstance.post("/auth/register",user);
                history.push("/login")
            }catch(err){
                console.log(err)
            }
        }
      };


    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Distantly-Near</h3>
                    <span className="loginDesc">Closer than you think!</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input placeholder="Username" required ref={username} className="loginInput" />
                        <input placeholder="First Name" required ref={firstName} className="loginInput" />
                        <input placeholder="Last Name" required ref={lastName} className="loginInput" />
                        <input placeholder="City" required ref={city} className="loginInput" />
                        <input placeholder="State" required ref={from} className="loginInput" />
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
    )
}
