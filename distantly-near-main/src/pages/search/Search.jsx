import "./search.css";
import React from 'react';
import { useState, useEffect } from "react";
import { axiosInstance } from "../../config";
// import {Users} from "../../dummyData"
import Topbar from "../../components/topbar/Topbar";
import { Link } from "react-router-dom";




export default function Search({}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [ searchTerm, setSearchTerm ] = useState('');
    const [ users, setUsers] = useState([]);



    useEffect(()=>{
        const fetchUsers = async () =>{
            const res = await axiosInstance.get("users/userList");
            setUsers(res.data);
        }
        fetchUsers();

    },[]);





  
    return (
        <>
        <Topbar/>
        <h4>Please Enter your friends username to add them!</h4>
        <div className="Search">
            <input type="text" placeholder="Search for users..." 
            onChange={event => {
                setSearchTerm(event.target.value)
                }}/>
            


            {/* {users.map((individual) => (
                <Link to={"/profile/" + individual.username}
                style={{ textDecoration: "none"}}
                >
                    <div>
                        <img src={individual.profilePicture
                        ? PF + individual.profilePicture
                        : PF + "person/noAvatar.png"
                    }
                    alt=""
                    />
                    <span>{individual.username}</span>
 
                    </div>
                </Link>
            ))} */}


            <div className="data">

            {users.filter((val)=>{
                if(searchTerm == ""){
                    return null
                }else if(val.username.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            }).map((val,key)=>{
                return (
                <div className="user" key={key}>
                    <Link
                        to={"/profile/" + val.username}
                        style={{ textDecoration: "none", color: "black" }}
                    >
                    <div className="rightbarFollowing">
                    <img
                    src={
                        val.profilePicture
                        ? PF + val.profilePicture
                        : PF + "person/noAvatar.png"
                    }
                    alt=""
                    className="rightbarFollowingImg"
                    />
                    <span className="rightbarFollowingName">{val.username}</span>
                    </div>
                    </Link>


                    {/* <p>{val.username}</p> */}
                    {/* <img  alt="" src={val.profilePicture} ></img> */}


                    
                </div>
                );
                
            })}
            </div>
            {/* <p>Hello World</p> */}

        </div>
        
        </>
    )
}