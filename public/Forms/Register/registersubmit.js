import React, { useState } from "react";
import { FaUser, FaLock  } from "react-icons/fa";
import { MdEmail  } from "react-icons/md";
import { FaRepeat  } from "react-icons/fa6";
import "./register.css";
import axios from 'axios';

const RegisterSubmit = () => {
    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const getCurrentIPAddress = async () => {
        try {
            const response = await axios.get('https://api.ipify.org?format=json');
            return response.data.ip;
        } catch (error) {
            console.error('Error fetching IP address:', error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }
        const currentDomain = window.location.hostname;
        const ipAddress = await getCurrentIPAddress();
        const emailExistsResponse = await axios.get(`http://${currentDomain}:${process.env.PORT || 8081}/check-email`, { params: { email } });
        if (emailExistsResponse.data.exists) {
            setErrorMessage('User with this email already exists.');
            return;
        }


        if (password.length < 8 || !/[A-Z]/.test(password) || !/[\W_]/.test(password)) {
            setErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter and one symbol.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match.');
            return;
        }
        
        const url = `http://${currentDomain}:${process.env.PORT || 8081}/signup`;
        try {
            // Send POST request to backend API
            await axios.post(url, { name, surname, password, email, ipAddress});
            console.log("Registered succesfully!");
            window.location.href = '/Forms/Login';
        } catch (error) {
            if (error.response && error.response.status === 500) {
                setErrorMessage('Error registering user: Internal server error');
            } 
            else if(error.response && error.response.status === 400)
            {
                setErrorMessage('Error registering user');
            }
            console.error('Error registering user:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <div className="registersubmitcontrols"> 
                <div className="registersubmitcontrols-inner">
                <div>
                    <FaUser className="icon" />
                    <input className="registersubmitinput" type="text" name="name" placeholder="Firstname" onChange={(e) => setName(e.target.value)} required/>
                </div>
                <div>
                    <FaUser className="icon" />
                    <input className="registersubmitinput" type="text" name="surname" placeholder="Lastname" onChange={(e) => setSurname(e.target.value)} required/>
                </div>
                <div>
                    <MdEmail className="icon" />
                    <input className="registersubmitinput" name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <div>
                    <FaLock className="icon" />
                    <input className="registersubmitinput" type="password" name="password" placeholder="Secure password"onChange={(e) => setPassword(e.target.value)} required/>
                </div>
                <div>
                    <FaRepeat className="icon" />
                    <input className="registersubmitinput" type="password" name="confirmPassword" placeholder="Repeat your password"onChange={(e) => setConfirmPassword(e.target.value)} required/>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <button className="submitBtn" type="submit">Create!</button>
                <div>
                    <button className="alreadyhavebtn" onClick={() => window.location.href='/Forms/Login'}>Already have an account?</button>
                </div>
                </div>
                </div>
            </form>
        </div>
    );
}

export default RegisterSubmit;
