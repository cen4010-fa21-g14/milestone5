import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions,Cancel} from '@mui/icons-material';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { axiosInstance } from "../../config";
// import axios from "axios";
export default function Share() {

    const {user} = useContext(AuthContext);
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const desc = useRef();
    const [file, setFile] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: desc.current.value,
        };
        if (file) {
          const data = new FormData();
          const fileName = Date.now() + file.name;
          data.append("file", file);
          data.append("name", fileName);
          newPost.image = fileName;
          console.log(newPost);
          try {
            await axiosInstance.post("/upload", data);
          } catch (err) {}
        }

        try {
          await axiosInstance.post("/posts", newPost);
          window.location.reload();
        } catch (err) {}
      };
        
    return (
        <div className="share">
            <div className="shareWrapper"></div>
            <div className="shareTop">
                <img className="shareProfileImg" alt="" src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"}></img>
                <input className="shareInput" placeholder={"What's Happening? " + user.username + "?"} ref={desc} />
            </div>
            <hr className="shareHr"/>
            {/* {file && (
          <div className="shareImgContainer">
            <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
            <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
          </div>
        )} */}
            <div className="shareBottom" onSubmit={submitHandler}>
                
                <button className="shareButton" type="submit">Share</button>
            </div>
        </div>
    )
}
