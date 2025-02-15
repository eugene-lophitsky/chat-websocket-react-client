import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="auth-page"/>}/>
                <Route path="auth-page" element={<AuthPage />} />
                <Route path="chat-page" element={<ChatPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
