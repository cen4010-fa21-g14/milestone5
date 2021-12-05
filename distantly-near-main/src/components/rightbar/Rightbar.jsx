import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import { useContext, useEffect, useState } from "react";
import { axiosInstance } from "../../config";
// import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { Add, Remove } from "@mui/icons-material";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = useState([]);
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const [followed, setFollowed] = useState(
    currentUser.followings.includes(user?.id)
  );
  const [ users, setUsers] = useState([]);



    useEffect(()=>{
        const fetchUsers = async () =>{
            const res = await axiosInstance.get("users/userList");
            setUsers(res.data);
        }
        fetchUsers();

    },[]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axiosInstance.get("/users/friends/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
        await axiosInstance.put(`/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axiosInstance.put(`/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        dispatch({ type: "FOLLOW", payload: user._id });
      }
      setFollowed(!followed);
    } catch (err) {
    }
  };
  
  const HomeRightbar = () => {
    return (
      <>
        
        {/* <div className="rightbarFriendList">
          {friends.map((friend) => (
            <div>
              <span>{friend.username}</span>
              

            </div>
          ))}
        </div> */}
          <div className="rightbarFriendList">
          <h4 className="rightbarTitle">Recommended Friends :</h4>
          {users.map((val,key)=>{
            
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
        
         
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
  {user.username == currentUser.username && (
                            <Link to="/settings" style={{textDecoration:"none"}}>

                            <button className="button" >
                                Settings
                              </button>
                            </Link>
        )}

        {user.username !== currentUser.username && (
        <button className="rightbarFollowingButton" onClick={handleClick}>
          {followed ? "Unfollow" : "Follow"}
          {followed ? <Remove /> : <Add />}
          </button>
          )}
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Username:</span>
            <span className="rightbarInfoValue">{user.username}</span>
          </div>
        <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Name:</span>
            <span className="rightbarInfoValue">{user.firstName} {user.lastName}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">{user.city}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">{user.from}</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">{user.relationship ===1 
                                                  ? "Single" : user.relationship ===2 
                                                  ? "Married"
                                                  : "-"}</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvatar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}