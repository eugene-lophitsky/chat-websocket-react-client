import React from "react";
import "../ChatWindow/chatwindow.css";
import { Button } from "primereact/button";
import { InputTextarea } from "primereact/inputtextarea";
import Message from "../Message/Message.jsx";
import "primeicons/primeicons.css";
import LogoutButton from "../LogoutButton/LogoutButton.jsx";
import { setIsTyping } from "../../features/chat/chatSlice.js";
import { useSelector, useDispatch } from "react-redux";
function ChatWindow() {
  const isTyping = useSelector((state) => state.isTyping);
  const dispatch = useDispatch();

  const handleTextareaInput = (event) => {
    dispatch(setIsTyping(event.target.value));
  };

  return (
    <div className="chatwindow-body">
      <div className="chatwindow-user-menu">
        <span className="chatwindow-avatar">
          <div className="chatwindow-avatar-main">
            <i
              className="pi pi-user"
              style={{ fontSize: "3.2em", color: "#136fdd" }}
            ></i>
          </div>
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
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>Tiesto</span>
              <span className="userlist-status-offline status-online"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>David Guetta</span>
              <span className="userlist-status-offline"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>Ferry Corsten</span>
              <span className="userlist-status-offline status-online"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>DVJ Bazuka</span>
              <span className="userlist-status-offline status-online"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>Armin van Buuren</span>
              <span className="userlist-status-offline"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>Calvin Harris</span>
              <span className="userlist-status-offline"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>Steve Aoki</span>
              <span className="userlist-status-offline"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>Afrojack</span>
              <span className="userlist-status-offline status-online"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>Markus Schultz</span>
              <span className="userlist-status-offline"></span>
            </a>
            <a href="#" className="userlist-item">
              <i
                className="pi pi-user"
                style={{
                  fontSize: "1.5em",
                  color: "blue",
                  backgroundColor: "white",
                  margin: "10px 10px 10px 0",
                }}
              ></i>
              <span>Dirty South</span>
              <span className="userlist-status-offline status-online"></span>
            </a>
          </div>
        </div>
      </div>
      <div className="chatwindow-main">
        <div className="chatwindow-main-header">Chat Room</div>
        <div className="chatwindow-main-message-tree">
          <Message />
          <div style={{ color: "blue" }}>{isTyping}</div>
        </div>
        <div className="chatwindow-main-input-wrapper">
          <div className="chatwindow-message-input">
            <InputTextarea
              style={{ height: "6.5vh" }}
              className="input-text-area"
              autoResize={false}
              onChange={handleTextareaInput}
              placeholder="Начните вводить сообщение"
            />
          </div>
          <a href="#" className="chatwindow-send-button">
            <i
              className="pi pi-send"
              style={{
                fontSize: "1.6em",
                color: "#ffffff",
                padding: "3px 6px",
              }}
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
