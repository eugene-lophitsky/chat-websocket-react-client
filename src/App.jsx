import React from "react";
import "./App.css";
// import UsersList from "./components/UsersList/UsersList.jsx";
// import { CheckButton } from "./components/CheckButton/CheckButton.jsx";
import {useState} from "react";
import ChatWindow from "./components/ChatWindow/ChatWindow.jsx";


function App() {

    const[currentUser, setCurrentUser] = useState({}| null);
    const[isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <div style={{ width: "300px" }}>
        {/*<UsersList />*/}
      </div>
        {/*<CheckButton />*/}
        <ChatWindow/>
    </>
  );
}

export default App;
