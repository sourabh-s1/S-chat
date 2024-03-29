import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import axios from "axios";

import { useAuth } from "../Contexts/AuthContex";

export default function Chats() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  console.log(user);

  const handleLogout = async () => {
    await auth.signOut();

    navigate("/");
  };

  //for profile image
  const getFile = async (url) => {
    const res = await fetch(url);
    const data = await res.blob();

    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": process.env.REACT_APP_CHAT_ENGINE_ID,
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);

        getFile(user.photoURL)
		.then((avatar) => {
			formdata.append("avatar", avatar, avatar.name);

			axios.post("https://api.chatengine.io/users/",
				formdata,
				{ headers: {"private-key": process.env.REACT_APP_CHAT_ENGINE_KEY}}
			).then(() => {setLoading(false)})
			.catch((err) => {console.log(err)} )
		})
      });
  }, [user, navigate]);

//  if(!user || loading) return <div className="lds-ripple"><div></div><div></div></div>

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">S-Chat</div>
        <div className="logout-tab" onClick={handleLogout}>
          Logout
        </div>
      </div>
      <ChatEngine
        height="calc(100vh-66px)"
        projectID={process.env.REACT_APP_CHAT_ENGINE_ID}
        userName= {user.email}
        userSecret= {user.uid}
      />
    </div>
  );
}
