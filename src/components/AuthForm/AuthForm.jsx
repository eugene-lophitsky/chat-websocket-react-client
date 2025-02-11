import React from "react";
import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from 'primereact/password';
import {Button} from "primereact/button";
import "./authform.css";

function AuthForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("" | null);

  function authenticate () {

  }

  return (
      <>
          <div className="auth-form">
              <label htmlFor="username">Имя пользователя</label>
              <InputText value={username} onChange={(e)=>setUsername(e.target.value)} />
              <Password value={password} className="passwordField" onChange={(e) => setPassword(e.target.value)} feedback={false} tabIndex={1} toggleMask/>
              <Button className="formButton">Войти</Button>
          </div>
      </>
  )
}

export default AuthForm;
