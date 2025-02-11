import React from "react";
import {useState} from "react";
import "../ChatWindow/chatwindow.css"
import {Button} from "primereact/button";
import {InputTextarea} from "primereact/inputtextarea";
import logo from "/avatar.png";
import chatIcon from "./messenger-button-icon.png";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";

function ChatWindow () {
    const[messages, setMessages] = useState([]);
    return (
      <div className="chatwindow-body">
        <div className="chatwindow-user-menu">
          <span className="chatwindow-avatar">
            <img src={logo} alt="" />
          </span>
          <span className="chatwindow-nickname">А. Пушкин</span>
          <div className="chatwindow-buttons">
            <Button label="edit" />
            <LogoutButton />
          </div>

          <div className="userlist">
            <div className="userlist-title">User list</div>
            <div className="userlist-items">
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>Tiesto</span>
                <span className="userlist-status-offline status-online"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>David Guetta</span>
                <span className="userlist-status-offline"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>Ferry Corsten</span>
                <span className="userlist-status-offline status-online"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>DVJ Bazuka</span>
                <span className="userlist-status-offline status-online"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>Armin van Buuren</span>
                <span className="userlist-status-offline"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>Calvin Harris</span>
                <span className="userlist-status-offline"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>Steve Aoki</span>
                <span className="userlist-status-offline"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>Afrojack</span>
                <span className="userlist-status-offline status-online"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>Markus Schultz</span>
                <span className="userlist-status-offline"></span>
              </a>
              <a href="#" className="userlist-item">
                <img src={logo} alt="" className="userlist-item-avatar" />
                <span>Dirty South</span>
                <span className="userlist-status-offline status-online"></span>
              </a>
            </div>
          </div>
        </div>
        <div className="chatwindow-main">
          <div className="chatwindow-main-header">Chat Room</div>
          <div className="chatwindow-main-message-tree"></div>
          <div className="chatwindow-main-input-wrapper">
            <div className="chatwindow-message-input">
              <InputTextarea
                style={{ height: "6.5vh" }}
                className="input-text-area"
                autoResize={false}
              />
            </div>
            <a href="#" className="chatwindow-send-button">
              <img src={chatIcon} alt="" />
            </a>
          </div>
        </div>
      </div>
    );

}

export default ChatWindow;
