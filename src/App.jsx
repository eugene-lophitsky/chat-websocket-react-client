import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import ChatPage from "./pages/ChatPage.jsx";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<NotFoundPage />} />
                <Route index element={<Home />} />
                <Route path="auth-page" element={<AuthPage />} />
                <Route path="chat-page" element={<ChatPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
