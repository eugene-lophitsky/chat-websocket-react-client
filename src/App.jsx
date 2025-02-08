import React from "react";
import "./App.css";
import UsersList from "./components/UsersList/UsersList.jsx";
import { CheckButton } from "./components/CheckButton/CheckButton.jsx";

function App() {
  return (
    <>
      <div style={{ width: "300px" }}>
        <UsersList />
      </div>
      <CheckButton />
    </>
  );
}

export default App;
