import React, {useState} from "react";
import "./register.css";
import RegisterSubmit from "./registersubmit.js";

const RegisterForm = () => {
    return (
        <div className='registersubmission'>
            <h1>Create new account!</h1>
            <RegisterSubmit/>
        </div>
    );
}

export default RegisterForm;
