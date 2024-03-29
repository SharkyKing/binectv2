import React, { useState } from "react";
import "./login.css";
import LoginSubmit from "./loginsubmit.js";

const LoginForm = () => {
    return (
        <div>
            <div className="loginsubmission">
                <h1>Sign in</h1>
                <LoginSubmit/>
            </div>
        </div>
    );
}

export default LoginForm;