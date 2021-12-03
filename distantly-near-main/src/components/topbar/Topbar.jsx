import "./topbar.css"
import {Search,Person,Chat,Notifications} from '@mui/icons-material';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {

    const {user, dispatch} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const handleLogout = () => {
        dispatch({type:"LOGOUT"});
    };

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">Distantly-Near</span>
                </Link>
            </div>
            <div className="topbarCenter">
                
            </div>
            <div className="topbarRight">
                <Link to="/search" style={{textDecoration:"none", color:"white"}}>
                    <span>Search</span>
                </Link>
                <span className="topbarLink" onClick={handleLogout}>{user && "LOGOUT"}</span>
            </div>
            
        <Link to={`/profile/${user.username}`}>
        <img alt="" className="topbarImg" src={
              user.profilePicture
                ? PF + user.profilePicture
                : PF + "person/noAvatar.png"
            }></img>
        </Link>
        </div>
    )
}
